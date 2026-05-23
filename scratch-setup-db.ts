import pkg from 'pg';
const { Client } = pkg;
import 'dotenv/config';

async function setupDb() {
  const connectionString = 'postgresql://postgres:postgres@localhost:5432/postgres'; // Trying common default
  const client = new Client({ connectionString });

  try {
    await client.connect();
    console.log('Connected to PostgreSQL successfully!');
    
    // Check if database exists
    const res = await client.query("SELECT 1 FROM pg_database WHERE datname = 'whatsway_db'");
    if (res.rowCount === 0) {
      console.log('Creating database whatsway_db...');
      await client.query('CREATE DATABASE whatsway_db');
      console.log('Database whatsway_db created successfully.');
    } else {
      console.log('Database whatsway_db already exists.');
    }
    await client.end();
    process.exit(0);
  } catch (err) {
    console.error('Failed to connect to PostgreSQL:', err.message);
    
    // Try again with different password or no password
    try {
      console.log('Retrying with no password...');
      const client2 = new Client({ connectionString: 'postgresql://postgres@localhost:5432/postgres' });
      await client2.connect();
      console.log('Connected to PostgreSQL (no password) successfully!');
       const res = await client2.query("SELECT 1 FROM pg_database WHERE datname = 'whatsway_db'");
      if (res.rowCount === 0) {
        console.log('Creating database whatsway_db...');
        await client2.query('CREATE DATABASE whatsway_db');
        console.log('Database whatsway_db created successfully.');
      }
      await client2.end();
      process.exit(0);
    } catch (err2) {
      console.error('Final connection attempt failed:', err2.message);
      process.exit(1);
    }
  }
}

setupDb();

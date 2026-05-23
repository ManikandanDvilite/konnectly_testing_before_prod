import pkg from 'pg';
const { Client } = pkg;
import 'dotenv/config';

async function setupDb() {
  const targetDb = 'konnectly';
  const targetUser = 'konnectly';
  const targetPass = 'Dtpl2026';
  
  const connectionStrings = [
    'postgresql://postgres:postgres@localhost:5432/postgres',
    'postgresql://postgres@localhost:5432/postgres',
    'postgresql://postgres:root@localhost:5432/postgres',
    'postgresql://postgres:admin@localhost:5432/postgres',
    'postgresql://postgres:password@localhost:5432/postgres'
  ];

  let client;
  let connected = false;

  for (const conn of connectionStrings) {
    try {
      console.log(`Trying to connect with: ${conn.replace(/:([^@]+)@/, ':****@')}`);
      client = new Client({ connectionString: conn });
      await client.connect();
      connected = true;
      console.log('Connected to PostgreSQL successfully!');
      break;
    } catch (err) {
      console.error(`Failed to connect with ${conn.split('@')[0]}: ${err.message}`);
    }
  }

  if (!connected) {
    console.error('Could not connect to PostgreSQL with any default credentials.');
    console.error('Please ensure PostgreSQL is running and you have a "postgres" user.');
    process.exit(1);
  }

  try {
    // Check if database exists
    const dbRes = await client.query("SELECT 1 FROM pg_database WHERE datname = $1", [targetDb]);
    if (dbRes.rowCount === 0) {
      console.log(`Creating database ${targetDb}...`);
      await client.query(`CREATE DATABASE ${targetDb}`);
      console.log(`Database ${targetDb} created successfully.`);
    } else {
      console.log(`Database ${targetDb} already exists.`);
    }

    // Check if user exists
    const userRes = await client.query("SELECT 1 FROM pg_roles WHERE rolname = $1", [targetUser]);
    if (userRes.rowCount === 0) {
      console.log(`Creating user ${targetUser}...`);
      await client.query(`CREATE USER ${targetUser} WITH PASSWORD '${targetPass}'`);
      await client.query(`ALTER USER ${targetUser} WITH SUPERUSER`); // Giving superuser for dev ease, or just grant all on db
      console.log(`User ${targetUser} created successfully.`);
    } else {
      console.log(`User ${targetUser} already exists. Updating password...`);
      await client.query(`ALTER USER ${targetUser} WITH PASSWORD '${targetPass}'`);
    }

    console.log(`Granting privileges on ${targetDb} to ${targetUser}...`);
    await client.query(`GRANT ALL PRIVILEGES ON DATABASE ${targetDb} TO ${targetUser}`);
    
    await client.end();
    console.log('Database setup completed successfully.');
    process.exit(0);
  } catch (err) {
    console.error('Error during database setup:', err.message);
    if (client) await client.end();
    process.exit(1);
  }
}

setupDb();

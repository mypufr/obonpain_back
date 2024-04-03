import pg from 'pg';

const client = new pg.Client(process.env.DATABASE_URL);
await client.connect();

export default client;

// database multiple connections
// const client = new pg.Pool({
//   host: process.env.PGHOST,
//   user: process.env.PGUSER,
//   database: process.env.PGDATABASE,
// });

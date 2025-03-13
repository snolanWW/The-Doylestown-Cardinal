module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: process.env.PGHOST,
      port: process.env.PGPORT,
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      ssl: false,
    },
  },
});

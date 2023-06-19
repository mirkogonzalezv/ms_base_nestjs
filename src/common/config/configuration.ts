export default () => ({
  environment: process.env.ENVIRONMENT,
  port: parseInt(process.env.PORT, 10),
  database: {
    pg: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DB,
      ssl: JSON.parse(process.env.DATABASE_SSL),
    },
  },
});

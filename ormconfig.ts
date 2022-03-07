export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',

  entities: ["entity/*.ts"],
  migrations: ["migration/*.ts"],
  cli: {
    migrationsDir: "migration",
  },
}

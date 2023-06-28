import "reflect-metadata"
import { DataSource } from 'typeorm';
import { ClientEntity } from '../entities/ClientEntity';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "lanchonete",
  synchronize: true,
  logging: true,
  entities: [ClientEntity],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => console.log('Database connected'))
  .catch((error) => console.log(error))
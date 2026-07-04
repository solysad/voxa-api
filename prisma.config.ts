import 'dotenv/config'; // <-- ESSA LINHA É OBRIGATÓRIA para ler seu .env
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"], // Garanta que o nome bate com o seu .env
  },
});

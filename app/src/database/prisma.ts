import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "../config/env";

const adapter = new PrismaPg({
  connectionString: env.DATABASE_URL,
});

export const prisma = new PrismaClient({
  adapter,
});

export async function connectDatabase() {
  await prisma.$connect();
  console.log("[Database] PostgreSQL conectado com sucesso.");
}

export async function disconnectDatabase() {
  await prisma.$disconnect();
}

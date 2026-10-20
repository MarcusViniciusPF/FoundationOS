import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.string().default("development"),

  DISCORD_TOKEN: z.string().optional(),
  DISCORD_CLIENT_ID: z.string().optional(),
  DISCORD_GUILD_ID: z.string(),

  ROBLOX_COOKIE: z.string().optional(),
  ROBLOX_GROUP_ID: z.coerce.number(),
  ROBLOX_BOT_USERNAME: z.string(),

  DB_HOST: z.string(),
  DB_PORT: z.coerce.number(),
  DB_NAME: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),

  DATABASE_URL: z.string(),

  REDIS_HOST: z.string(),
  REDIS_PORT: z.coerce.number(),

  LOG_CHANNEL_ID: z.string().optional(),
  APPROVALS_DIRECTOR_CHANNEL_ID: z.string().optional(),
  APPROVALS_O5_CHANNEL_ID: z.string().optional(),
});

export const env = envSchema.parse(process.env);

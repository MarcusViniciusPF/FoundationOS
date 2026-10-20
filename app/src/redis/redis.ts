import { createClient } from "redis";
import { env } from "../config/env";

export const redis = createClient({
  socket: {
    host: env.REDIS_HOST,
    port: env.REDIS_PORT,
  },
});

redis.on("error", (error) => {
  console.error("[Redis] Erro:", error);
});

export async function connectRedis() {
  await redis.connect();
  console.log("[Redis] Redis conectado com sucesso.");
}

export async function disconnectRedis() {
  await redis.disconnect();
}

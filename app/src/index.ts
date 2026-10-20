import { env } from "./config/env";
import { connectDatabase, disconnectDatabase } from "./database/prisma";
import { connectRedis, disconnectRedis } from "./redis/redis";
import { discordClient } from "./discord/client";
import { registerCommands } from "./discord/registerCommands";
import { interactionCreateEvent } from "./discord/events/interactionCreate";

async function bootstrap() {
  console.log("FoundationOS iniciando...");

  await connectDatabase();
  await connectRedis();

  if (!env.DISCORD_TOKEN) {
    console.log("[Discord] DISCORD_TOKEN não configurado. Pulando login por enquanto.");
  } else {
    await discordClient.login(env.DISCORD_TOKEN);

    await registerCommands();

    discordClient.on(
      "interactionCreate",
      interactionCreateEvent
    );

    console.log(`[Discord] Bot conectado como ${discordClient.user?.tag}`);
  }

  console.log("FoundationOS iniciado com sucesso.");
}

bootstrap().catch(async (error) => {
  console.error("[FoundationOS] Erro crítico na inicialização:", error);

  await disconnectRedis().catch(() => null);
  await disconnectDatabase().catch(() => null);

  process.exit(1);
});

import { REST, Routes } from "discord.js";
import { env } from "../config/env";
import { pingCommand } from "./commands/ping";
import { infoCommand } from "./commands/info";
import { ranksCommand } from "./commands/ranks";
import { profileCommand } from "./commands/profile";
import { warningsCommand } from "./commands/warnings";


export async function registerCommands() {
  if (!env.DISCORD_TOKEN || !env.DISCORD_CLIENT_ID) {
    throw new Error("DISCORD_TOKEN ou DISCORD_CLIENT_ID não configurado.");
  }

  const rest = new REST({ version: "10" }).setToken(env.DISCORD_TOKEN);

  await rest.put(
    Routes.applicationGuildCommands(
      env.DISCORD_CLIENT_ID,
      env.DISCORD_GUILD_ID
    ),
    {
      body: [
        pingCommand.data.toJSON(),
        infoCommand.data.toJSON(),
        ranksCommand.data.toJSON(),
        profileCommand.data.toJSON(),
        warningsCommand.data.toJSON(),

      ],
    }
  );

  console.log("[Discord] Slash commands registrados.");
}

import { Interaction } from "discord.js";
import { pingCommand } from "../commands/ping";
import { infoCommand } from "../commands/info";
import { ranksCommand } from "../commands/ranks";
import { profileCommand } from "../commands/profile";
import { warningsCommand } from "../commands/warnings";


export async function interactionCreateEvent(interaction: Interaction) {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await pingCommand.execute(interaction);
    return;
  }

  if (interaction.commandName === "info") {
    await infoCommand.execute(interaction);
    return;
  }

  if (interaction.commandName === "ranks") {
    await ranksCommand.execute(interaction);
    return;
  }
 if (interaction.commandName === "perfil") {
   await profileCommand.execute(interaction);
   return;
 }

 if (interaction.commandName === "advertencias") {
   await warningsCommand.execute(interaction);
   return;
 }





}

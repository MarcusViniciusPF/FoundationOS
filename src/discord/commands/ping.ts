import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export const pingCommand = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Verifica a latência do FoundationOS."),

  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.reply("🏓 Pong!");
  },
};

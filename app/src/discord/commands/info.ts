import {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder
} from "discord.js";

export const infoCommand = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Mostra informações do FoundationOS"),

  async execute(interaction: ChatInputCommandInteraction) {
    const embed = new EmbedBuilder()
      .setTitle("FoundationOS")
      .setDescription("Sistema Administrativo da SCPF Brasil")
      .addFields(
        {
          name: "Versão",
          value: "0.1.0",
          inline: true
        },
        {
          name: "Status",
          value: "Operacional",
          inline: true
        },
        {
          name: "Servidor",
          value: "SCPF Brasil",
          inline: false
        }
      )
      .setTimestamp();

    await interaction.reply({
      embeds: [embed]
    });
  },
};

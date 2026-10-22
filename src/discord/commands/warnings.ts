import {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} from "discord.js";

import { prisma } from "../../database/prisma";

export const warningsCommand = {
  data: new SlashCommandBuilder()
    .setName("advertencias")
    .setDescription("Mostra suas advertências"),

  async execute(interaction: ChatInputCommandInteraction) {
    const warnings = await prisma.warning.findMany({
      where: {
        targetDiscordId: interaction.user.id,
        active: true,
      },
    });

    const leves = warnings.filter(
      (w) => w.severity.toUpperCase() === "LEVE"
    ).length;

    const medias = warnings.filter(
      (w) => w.severity.toUpperCase() === "MEDIA"
    ).length;

    const graves = warnings.filter(
      (w) => w.severity.toUpperCase() === "GRAVE"
    ).length;

    const embed = new EmbedBuilder()
      .setTitle(`Advertências de ${interaction.user.username}`)
      .addFields(
        {
          name: "Leves",
          value: String(leves),
          inline: true,
        },
        {
          name: "Médias",
          value: String(medias),
          inline: true,
        },
        {
          name: "Graves",
          value: String(graves),
          inline: true,
        },
        {
          name: "Total",
          value: String(warnings.length),
          inline: false,
        }
      )
      .setTimestamp();

    if (graves >= 2) {
      embed.addFields({
        name: "⚠️ Atenção",
        value:
          "Mais uma advertência grave resultará em suspensão automática.",
      });
    }

    await interaction.reply({
      embeds: [embed],
    });
  },
};

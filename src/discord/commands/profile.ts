import {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} from "discord.js";

import { prisma } from "../../database/prisma";

export const profileCommand = {
  data: new SlashCommandBuilder()
    .setName("perfil")
    .setDescription("Mostra seu perfil na Fundação"),

  async execute(interaction: ChatInputCommandInteraction) {
    let user = await prisma.user.findUnique({
      where: {
        discordId: interaction.user.id,
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          discordId: interaction.user.id,
        },
      });
    }

    const embed = new EmbedBuilder()
      .setTitle(`Perfil de ${interaction.user.username}`)
      .addFields(
        {
          name: "Discord ID",
          value: user.discordId,
          inline: false,
        },
        {
          name: "Roblox",
          value: user.robloxUsername ?? "Não vinculado",
          inline: false,
        },
        {
          name: "Cargo",
          value: user.currentRank ?? "Não definido",
          inline: false,
        },
        {
          name: "Departamento",
          value: user.department ?? "Não definido",
          inline: false,
        }
      )
      .setTimestamp();

    await interaction.reply({
      embeds: [embed],
    });
  },
};

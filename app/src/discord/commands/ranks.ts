import {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder
} from "discord.js";

export const ranksCommand = {
  data: new SlashCommandBuilder()
    .setName("ranks")
    .setDescription("Mostra a hierarquia da SCPF Brasil."),

  async execute(interaction: ChatInputCommandInteraction) {
    const embed = new EmbedBuilder()
      .setTitle("Hierarquia da SCPF Brasil")
      .setDescription("Lista oficial dos cargos principais do FoundationOS.")
      .addFields(
        {
          name: "[TA - O Administrador]",
          value: "Autoridade máxima da Fundação.",
          inline: false
        },
        {
          name: "O5-X",
          value: "Administração superior com acesso total ao sistema.",
          inline: false
        },
        {
          name: "[O5] Conselho O5",
          value: "Alto Comando da Fundação.",
          inline: false
        },
        {
          name: "Diretor do Site",
          value: "Diretor da instalação e da administração geral da Fundação.",
          inline: false
        },
        {
          name: "[L-V] Level-5",
          value: "Department High Command. Diretor de departamento.",
          inline: false
        },
        {
          name: "[L-IV] Level-4",
          value: "Department Middle Command. Segundo no comando do departamento.",
          inline: false
        },
        {
          name: "[L-III] Level-3",
          value: "Department Junior Command. Primeiro nível de comando departamental.",
          inline: false
        },
        {
          name: "[L-II] Level-2",
          value: "Membro experiente de um departamento.",
          inline: false
        },
        {
          name: "[L-I] Level-1",
          value: "Funcionário regular da Fundação.",
          inline: false
        },
        {
          name: "[L-0] Level-0",
          value: "Primeiro cargo funcional da Fundação.",
          inline: false
        },
        {
          name: "[CE] Classe-E",
          value: "Cargo especial de suspensão. Não possui autoridade.",
          inline: false
        },
        {
          name: "[CD] Classe-D",
          value: "Cargo inicial. Não possui autoridade administrativa.",
          inline: false
        },
        {
          name: "Developer",
          value: "Cargo técnico. Não concede permissões administrativas automaticamente.",
          inline: false
        }
      )
      .setTimestamp();

    await interaction.reply({
      embeds: [embed]
    });
  },
};

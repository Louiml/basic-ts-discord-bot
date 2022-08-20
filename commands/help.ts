import { ICommand } from "wokcommands";
import { MessageActionRow, MessageButton, MessageEmbed } from "discord.js";

export default {
category: 'general',
description: 'show all the commands of the bot',
slash: true,
callback: async ({interaction: msgInt}) => {
    const helpmenu = new MessageEmbed()
      .setDescription(`Hi, I'm loui and I'm a discord bot
      And I want to show you what can I do
      
      **General / Info**:
      \`!help, !ban, !kick\`
      
      **Prefix:** \`!\`
      **Programming language:** [TypeScript](https://www.typescriptlang.org/)
      **Developer:** [louiml.net](https://louiml.net)`)
    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setURL('https://github.com/louiml-net/ basic-ts-discord-bot')
        .setStyle('LINK')
        .setLabel('source code')
    )
    await msgInt.reply({
        components: [row],
        embeds: [helpmenu]
    })
}
} as ICommand

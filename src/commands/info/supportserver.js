const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = class SupportServerCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'supportserver',
      aliases: ['support', 'ss'],
      usage: 'supportserver',
      description: 'Displays the invite link to Rectangler\'s Discord Support Server.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('Support Server')
      .setThumbnail('https://cdn.discordapp.com/attachments/828021156267032616/830019579487977542/Calypso_WIP_3.png')
      .setDescription('Click [here](https://discord.gg/NYu72SRGuK) to join the Rectangler Support Server!')
      .addField('Other Links', 
        '**[Invite Me](https://discordapp.com/oauth2/authorize?client_id=774701617928208405&scope=bot&permissions=8) | **'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};

const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { stripIndent } = require('common-tags');

module.exports = class ServerCountCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'servercounts',
      aliases: ['usercounts'],
      usage: 'servercount',
      description: 'Fetches Rectangler\'s current server and user count.',
      type: client.types.INFO
    });
  }
  run(message) {
    const counts = stripIndent`
      Servers :: ${message.client.guilds.cache.size}
      Users   :: ${message.client.users.cache.size}
    `;
    const embed = new MessageEmbed()
      .setTitle('Rectangler\'s Server Count')
      .setDescription(stripIndent`\`\`\`asciidoc\n${counts}\`\`\``)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};

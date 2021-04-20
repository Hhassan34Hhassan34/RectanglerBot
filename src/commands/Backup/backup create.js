const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const Discord = require("discord.js");
const backup = require("discord-backup");
  backup.setStorageFolder(__dirname+"/backups/");
module.exports = class BackupCreateCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'backupcreate',
      usage: 'Backup',
      aliases: ['!backupcreate'],
      description: '```!backupcreate    To Create An backup```',
      userPermissions: ['ADMINISTRATOR'],  
      type: client.types.BACKUP
    });
  }
  async run(message) {
	  
    let perms = message.member.hasPermission("ADMINISTRATOR");

    if (!perms)
      return message.channel.send(':x: An error occurred, please check if the bot is administrator!');
    backup
      .create(message.guild, {
        jsonBeautify: true
      })
      .then(backupData => {
        // And send informations to the backup owner
        message.channel.send(//backupData.id
          new Discord.MessageEmbed()
          .setTitle(`Info`)
          .setColor(message.guild.me.displayHexColor)
          .setThumbnail(message.author.displayAvatarURL())
          .setDescription(`Created backup of **${message.guild.name}** with the Backup id \`${backupData.id}\``)
          .addField( "Usage",            `\`\`\`!backup load ${backupData.id}\`\`\` \`\`\`!backup info ${backupData.id}\`\`\``)
        );
      });
    }
  };
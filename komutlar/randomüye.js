module.exports = {
    kod: "random",
    async run (client, message, args) {
      const { MessageEmbed } = require('discord.js')
      message.channel.send('🎉 <@' + message.guild.members.cache.random() + '>')
    }
  }
  
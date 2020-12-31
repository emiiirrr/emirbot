module.exports = {
    kod: "yaz",
    aliases: ['y'],
    async run (client, message, args) {
      const Discord = require('discord.js')
      message.delete(message.author)
      const yazmesajı = message.content.split(' ').slice(1)
      const yaz = yazmesajı.join(" ")
      message.channel.send(yaz)
    }
  }
  

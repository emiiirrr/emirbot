module.exports = {
    kod: "yaz",
    async run (client, message, args) {
      const Discord = require('discord.js')
      message.delete(message.author)
      const yazmesajı = message.content.split(' ').slice(1)
      const yaz = yazmesajı.join(" ")
      message.channel.send(yaz)
    }
  }
  
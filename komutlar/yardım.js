module.exports = {
  kod: "yardım",
  async run (client, message, args) {
    const Discord = require('discord.js')
    const yardım = new Discord.MessageEmbed()
    .setTitle('Komutlar')
    .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
    .setDescription('Yakında eklenecektir...')
    message.channel.send(yardım)
  }
}

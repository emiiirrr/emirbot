module.exports = {
  kod: "napim",
  async run (client, message, args) {
    const Discord = require('discord.js')
    const napim = new Discord.MessageEmbed()
    .setImage('https://cdn.discordapp.com/attachments/765898741969846275/792687881730129929/tenor_3.gif');
    message.channel.send(napim)
  }
}

module.exports = {
  kod: "kaaninho",
  async run (client, message, args) {
    const Discord = require('discord.js')
    message.delete(message.author)
    const kaan = new Discord.MessageEmbed()
    .setTitle('***Bravo six going dark...***')
    .setAuthor('Kaaninho out')
    .setColor("RANDOM")
    .setImage('https://media.giphy.com/media/jQGE7t0qcFYzr3EHsF/giphy.gif');
    message.channel.send(kaan)
  }
}

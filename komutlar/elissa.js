module.exports = {
  kod: "elissa",
  async run (client, message, args) {
    const Discord = require('discord.js')
    const elissa = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage('https://www.morpho.co/images/M_cypris_cypris_ml_400.jpg')
    message.reply(elissa)
  }
}

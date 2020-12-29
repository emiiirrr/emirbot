module.exports = {
  kod: "insta",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('Instagram')
    .addField('adresim:', '[Emir A.](https://www.instagram.com/emir.vn/?hl=tr)')
    .setColor("PURPLE")
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png')
    message.channel.send(embed)
  }
}

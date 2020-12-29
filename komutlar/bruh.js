const { MessageEmbed } = require('discord.js')
module.exports = {
    kod: "sina",
    async run (client, message, args) {
        const embed = new MessageEmbed()
        .setImage('https://cdn.discordapp.com/attachments/780422247307018240/793253745353949200/IMG-20201227-WA0002.jpg')
        message.channel.send(embed)
    }
}
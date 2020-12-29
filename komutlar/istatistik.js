const { MessageEmbed } = require('discord.js')
const moment = require('moment')
require('moment-duration-format')
const os = require('os')
module.exports = {
    kod: "istatistik",
    async run (client, message, args) {
        const uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
        const embed = new MessageEmbed()
        .setColor("RED")
        .setTitle('İstatistik ⚙️')
        .addField('Kullanıcı Sayısı 🔊', client.users.cache.size)
        .addField('Sunucu Sayısı 🔊', client.guilds.cache.size)
        .addField('Kanal Sayısı 🔊', client.channels.cache.size)
        .addField('Çalışma Süresi ⏱️', uptime)
        .addField('Node.js Versiyon 🆔', process.version)
        .addField('RAM Kullanımı 🖥️', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB')
        .addField('CPU 🖥️', os.cpus().map(i => i.model)[0])
        .addField('Mimari x( ) 🖥️', os.arch())
        .setFooter(`${client.user.tag}`, `${client.user.displayAvatarURL()}`)
        message.channel.send(embed)
    }
}
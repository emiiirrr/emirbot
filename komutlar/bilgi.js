const moment = require('moment')
require('moment-duration-format')
module.exports = {
    kod: "kullanıcı",
    aliases: ['info', 'user']
    async run (client, message, args) {
        const { MessageEmbed } = require('discord.js')
        let üye = message.mentions.users.first()
        if (üye) {
            let durum = üye.presence.status
            .replace('online', 'Çevrimiçi')
            .replace('idle', 'Boşta')
            .replace('dnd', 'Rahatsız Etmeyin')
            .replace('offline', 'Çevrimdışı')
            const embed = new MessageEmbed()
            .setThumbnail(üye.displayAvatarURL({dynamic: true}))
            .setColor("GREEN")
            .setTitle(üye.username)
            .setDescription(üye.tag + ` kullanıcısının bilgileri:\n\nKullanıcı Adı: ${üye.username}\nEtiket: #${üye.discriminator}\nID: ${üye.id}\nSon Mesaj: ${üye.lastMessage}\nKullanıcı Bot mu?: ${üye.bot ? 'Evet' : 'Hayır'}\nKullanıcı Aktivitesi: ${üye.presence.activities[0]}\nÜye Durumu: ${durum}\nHesap Oluşturma Tarihi: ${moment(üye.createdAt).format('DD')}/${moment(üye.createdAt).format('MM')}/${moment(üye.createdAt).format('YYYY HH:mm:ss')}\nRoller: ${message.guild.members.cache.get(üye.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join('  |  ')}`)
            message.channel.send(embed)
        } else {
            üye = message.author
            let durum = üye.presence.status
            .replace('online', 'Çevrimiçi')
            .replace('idle', 'Boşta')
            .replace('dnd', 'Rahatsız Etmeyin')
            .replace('offline', 'Çevrimdışı')
            const embed = new MessageEmbed()
            .setThumbnail(üye.displayAvatarURL({dynamic: true}))
            .setColor("GREEN")
            .setTitle(üye.username)
            .setDescription(üye.tag + ` kullanıcısının bilgileri:\n\nKullanıcı Adı: ${üye.username}\nEtiket: #${üye.discriminator}\nID: ${üye.id}\nSon Mesaj: ${üye.lastMessage}\nKullanıcı Bot mu?: ${üye.bot ? 'Evet' : 'Hayır'}\nKullanıcı Aktivitesi: ${üye.presence.activities[0]}\nÜye Durumu: ${durum}\nHesap Oluşturma Tarihi: ${moment(üye.createdAt).format('DD')}/${moment(üye.createdAt).format('MM')}/${moment(üye.createdAt).format('YYYY HH:mm:ss')}\nRoller: ${message.guild.members.cache.get(üye.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join('  |  ')}`)
            message.channel.send(embed)
        }
    }
}

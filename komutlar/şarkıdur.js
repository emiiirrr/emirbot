const { MessageEmbed } = require('discord.js')
module.exports = {
    kod: "disconnect",
    aliases: ['dc', 'leave'],
    async run (client, message, args) {
        if (message.member.voice.channel) {
            const dc = await message.member.voice.channel.leave()
            const embed = new MessageEmbed()
            .setColor("RED")
            .setTitle('Bağlantı Kesildi 📭')
            .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
            message.channel.send(embed, dc)
        } else {
            message.reply("Sesli bir kanalda değilim! ❌").then(sil => {
                setTimeout(() => {
                    sil.delete()
                }, 5000);
            })
        }
    }
}

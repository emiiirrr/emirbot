module.exports = {
    kod: "unban",
    async run (client, message, args) {
        let id = args[0]
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Bunu yapamazsın! ❌').then(mesaj5 => {
            setTimeout(() => {
                mesaj5.delete()
            }, 5000);
        });
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply('Bunu yapamazsın! ❌').then(mesaj6 => {
            setTimeout(() => {
                mesaj6.delete()
            }, 5000);
        });
        if (isNaN(id)) return message.reply('Lütfen geçerli bir ID girin! ❌').then(mesaj => {
            setTimeout(() => {
                mesaj.delete()
            }, 5000);
        });
        message.guild.fetchBans().then(ban => {
            if (ban.size === 0) return message.reply('Sunucuda banlı kullanıcı yok! ❌').then(mesaj2 => {
                setTimeout(() => {
                    mesaj2.delete()
                }, 5000);
            });
            const banlanan = ban.find(b => b.user.id === id)
            if (!banlanan) return message.channel.send('Bu kullanıcı banlı değil! ❌').then(mesaj3 => {
                setTimeout(() => {
                    mesaj3.delete()
                }, 5000);
            });
            message.guild.members.unban(banlanan.user)
            message.reply('Kullanıcının banı kaldırılmıştır. ✔️').then(mesaj4 => {
                setTimeout(() => {
                    mesaj4.delete()
                }, 5000);
            })
        })
    }
}
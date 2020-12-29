module.exports = {
    kod: "taşı",
    async run (client, message, args) {
        if (!message.member.hasPermission('MOVE_MEMBERS')) return message.reply('Bunu yapamazsın! ❌').then(mesaj1 => {
            setTimeout(function () {
                mesaj1.delete()
            }, 5000);
        });
        const üye = message.mentions.members.first()
        if (!üye) return message.reply('Kullanıcı Seçmedin! ❌').then( mesaj2 => {
            setTimeout(function () {
                mesaj2.delete()
            }, 5000);
        });
        if (!üye.voice.channel) return message.reply('Kullanıcı Sesli Kanalda Değil! ❌').then(mesaj3 => {
            setTimeout(function () {
                mesaj3.delete()
            }, 5000);
        });
        if (message.member.voice.channel) {
            message.reply('Kullanıcı Taşındı. ✔️').then(mesaj4 => {
                setTimeout(function () {
                    mesaj4.delete()
                }, 5000);
            });
            üye.voice.setChannel(messagge.member.voice.channel.id)
        } else {
            if (!args[1]) return message.reply('Sesli Kanal ID Girin. ❌').then(mesaj5 => {
                setTimeout(function () {
                    mesaj5.delete()
                }, 5000);
            });
            if (isNaN(args[1])) return message.reply('Sadece Kanal ID Girin. ❌').then(mesaj6 => {
                setTimeout(function () {
                    mesaj6.delete()
                }, 5000);
            });
            message.reply('Kullanıcı Taşındı. ✔️').then(mesaj7 => {
                setTimeout(function () {
                    mesaj7.delete()
                }, 5000);
            });
            üye.voice.setChannel(args[1])
        }
    }
}
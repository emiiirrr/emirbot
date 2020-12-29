module.exports = {
    kod: "slowmode" ,
    async run (client, message, args) {
        const ms = require('rhino-ms')
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('Bunu yapamazsın! ❌').then(mesaj1 => {
            setTimeout(function () {
                mesaj1.delete()
            }, 5000);
        });
        const zaman = ms(args.join(" "), {birim: "saniye"})
        if (zaman > 21600 || zaman < 0) return message.reply('Lütfen Geçerli Sayı Girin. (min.1) ❌').then(mesaj2 => {
            setTimeout(function () {
                mesaj2.delete()
            }, 5000);
        })
        const slowmode = Math.floor(zaman)
        message.channel.setRateLimitPerUser(slowmode)
        message.reply('Slowmode ' + args.join(" ") + ' olarak ayarlandı. ✔️').then(mesaj3 => {
            setTimeout(function () {
                mesaj3.delete()
            }, 5000);
        })     
    }
}
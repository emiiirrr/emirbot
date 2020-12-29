module.exports = {
    kod: "zar",
    async run (client, message, args) {
        const { MessageEmbed } = require('discord.js')
        const at = new MessageEmbed()
        .setColor('#ffffff')
        .setTitle('Zar Atılıyor')
        .setImage('https://media.tenor.com/images/afd885cf9751a4c6c33b699f6322143a/tenor.gif')
        message.reply(at).then(editmesajı => {
        setTimeout(function () {
            var sayılar = [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6'
            ];
            var sonuç = Math.floor(Math.random()*sayılar.length);
            const embed = new MessageEmbed()
            .setColor('#ffffff')
            .addField('Sonuç:', `${sayılar[sonuç]}`);
            editmesajı.edit(embed)
        }, 2000);
    })
    }
}

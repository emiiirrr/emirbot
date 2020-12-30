const { MessageEmbed } = require('discord.js')
module.exports = {
    kod: "kart",
    async run (client, message, args) {
        var Gifler = [
            'https://pbs.twimg.com/media/DwdKN-5WkAAFK7T.jpg',
            'https://pbs.twimg.com/media/DwdKPCHWsAEnwlU.jpg',
            'https://pbs.twimg.com/media/EU216QHWsAAOIMi.jpg',
            'https://pbs.twimg.com/media/EU25zd8WAAI_-5n.jpg',
            'https://c12.incisozluk.com.tr/res/incisozluk//11502/8/2727488_o5612.jpg',
            'https://pbs.twimg.com/media/DwdKPnnXQAYr5SZ.jpg',
            'https://pbs.twimg.com/media/DwdKOgZX0AEimLz?format=jpg&name=900x900',
            'https://i.hizliresim.com/onvnDk.jpg',
            'https://c12.incisozluk.com.tr/res/incisozluk//11501/2/2640882_o24da.jpg',
            'https://c12.incisozluk.com.tr/res/incisozluk//11509/8/3190138_o8eca.jpg',
            'https://64.media.tumblr.com/fed60fc8a61c9903481b53b541cc6303/tumblr_pycnwmSTgP1ujmvy2o1_1280.jpg',
            'https://pbs.twimg.com/media/EU3u1ZxX0AIwiFQ.jpg',
            'https://pbs.twimg.com/media/EU3u00ZWsAEmXIP.jpg',
            'https://c12.incisozluk.com.tr/res/incisozluk//11505/2/1277652_o72d2.jpg',
            'https://pbs.twimg.com/media/BwndhVsCUAED4IX.jpg',
            'https://c12.incisozluk.com.tr/res/incisozluk//11501/6/2535076_odb88.jpg',
            'https://i.hizliresim.com/gjaLd2.jpg',
            'https://c12.incisozluk.com.tr/res/incisozluk//11507/1/2095391_o4cf7.jpg',
            'https://c12.incisozluk.com.tr/res/incisozluk//11505/2/2557532_oba6a.jpg',
            'https://i.hizliresim.com/NYPYMO.jpg',
            'https://pbs.twimg.com/media/EU3u00ZWsAEmXIP.jpg',
            'https://i.hizliresim.com/WW5ry4.jpg',
            'https://pbs.twimg.com/media/EU4PDhnXsAEW5u3.jpg',
            'https://c12.incisozluk.com.tr/res/incisozluk//11507/6/2859196_o64ce.jpg',
            'https://pbs.twimg.com/media/DmUkUxZWsAYhHr_.jpg',
            'https://pbs.twimg.com/media/D2iDRAoX0AY-6r1.jpg',
            'https://c12.incisozluk.com.tr/res/incisozluk//11504/1/2120611_o1321.png',
            'https://c12.incisozluk.com.tr/res/incisozluk//11500/7/2934847_o2dfc.jpg',
            'https://cdn.listetek.com/5d5b9bd9f175447b96efbf875d67dfe5',
            'https://pics.me.me/thumb_trap-soviet-union-trap-card-o-everyone-equally-gay-card-35920621.png',
            'https://cdn.discordapp.com/attachments/792388105549119489/793508542316675112/20201229_185838.jpg',
            'https://img.donanimhaber.com/upfiles/279273/FD95BA4CCFF94E4F965678B62750B93A.jpg',
            'https://c12.incisozluk.com.tr/res/incisozluk//11507/2/3263342_o4233.jpg',
            'https://pbs.twimg.com/media/ElJztuEW0AElrI1.jpg',
            'https://pbs.twimg.com/media/EHbig9VWsAA6lz8.jpg',
            'https://i.hizliresim.com/vY9o06.jpg',
            'https://pbs.twimg.com/media/ECEjg_XU4AAxaq4.jpg',
            'https://pbs.twimg.com/media/EFfBnPmXYAADzG2.jpg',
            'https://preview.redd.it/7d8tg91lpil51.jpg?auto=webp&s=9fbbac43f88d5e399209ded6db67e7ae2726e37f',
            'https://pbs.twimg.com/media/EZREKaXXsAADU_m.jpg',
            'https://i.redd.it/bw2e0pvq0ve51.jpg',
            'https://c12.incisozluk.com.tr/res/incisozluk//11506/8/3262638_o9101.jpg',
            'https://galeri14.uludagsozluk.com/755/arap-kizlarindaki-kasli-erkek-meraki_1918141_m.jpg',
            'https://pbs.twimg.com/media/Diy3fCcXsAEAvNB.jpg',
            'https://c12.incisozluk.com.tr/res/incisozluk//11501/2/2856972_od602.jpg',
            'https://c12.incisozluk.com.tr/res/incisozluk//11505/5/2711145_o8ed4.jpg',
            'https://galeri14.uludagsozluk.com/795/it-oglu-it_1734314.jpg',
            'https://c12.incisozluk.com.tr/res/incisozluk//11508/7/3351997_o67b5.png',
            'https://i.redd.it/6w0fhi7k87g31.png',
            'https://pbs.twimg.com/media/BwnlLerIMAAP2tM.jpg'
        ];
        var gif = Math.floor(Math.random()*Gifler.length);
        const embed = new MessageEmbed()
        .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
        .setImage(`${Gifler[gif]}`);
        message.channel.send(embed)
    }
}

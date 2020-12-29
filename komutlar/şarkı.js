const play = require('discordjs-ytdl')
const { MessageEmbed } = require('discord.js')
module.exports = {
    kod: "play",
    async run (client, message, args) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join()
            message.channel.send('🔎Şarkı Aranıyor...').then(edit => {
                setTimeout(() => {
                    const embed = new MessageEmbed()
                    .setTitle('🎼Şarkı bulundu:')
                    .setColor("RED")
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png')
                    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
                    play.play(connection, args.join(" "), 'AIzaSyBGLH_MZ3xgIEd5pSYFeMVdqDQSSgEItg4')
                    let title = play.title(args.join(" "), 'AIzaSyBGLH_MZ3xgIEd5pSYFeMVdqDQSSgEItg4')
                    title.then(titlee => embed.addField('📌Video Başlığı: ', titlee))
                    let kanal = play.channel(args.join(" "), 'AIzaSyBGLH_MZ3xgIEd5pSYFeMVdqDQSSgEItg4')
                    kanal.then(titlee => embed.addField('📌Kanal Adı: ', titlee))
                    setTimeout(() => {
                        edit.edit(embed)
                }, 2500);
            })

            })
        } else {
            message.reply('Sesli kanalda olman lazım! ❌')
        }
    }
}


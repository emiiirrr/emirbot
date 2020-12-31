const { MessageEmbed } = require('discord.js')
module.exports = {
    kod: "fuck",
    async run (client, message, args) {
        var fucks = [
            'https://s3.us-east-1.amazonaws.com/storia-storage/staged/host-prod/yAVZKibRBmpnNwAUSyP8Cs01L0oMhbC9fn6Jf7Ot.jpeg',
            'https://media.giphy.com/media/UwkrJKRKJkFb2/giphy.gif'
        ];
        let member = message.mentions.users.first();
        if (member) {
            var fuck = Math.floor(Math.random()*fucks.length)
            const embed = new MessageEmbed()
            .setImage(`${fucks[fuck]}`)
            message.channel.send(`**${message.author.username}** Tarafından s*kildin **${member.username}**`, embed)
        } else {
            message.reply("Kullanıcıyı etiketlemedin! ❌").then(mesaj4 => {
                setTimeout(function () {
                  mesaj4.delete()
                }, 3000);
              });            
        }
    }
}

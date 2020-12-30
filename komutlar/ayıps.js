const { MessageEmbed } = require('discord.js')
module.exports = {
    kod: "fuck",
    async run (client, message, args) {
        let member = message.mentions.users.first();
        if (member) {
            const embed = new MessageEmbed()
            .setImage('https://s3.us-east-1.amazonaws.com/storia-storage/staged/host-prod/yAVZKibRBmpnNwAUSyP8Cs01L0oMhbC9fn6Jf7Ot.jpeg')
            message.channel.send(`**${message.author.username}** seni s*kti. **${member.username}**`, embed)
        } else {
            message.reply("Kullanıcıyı etiketlemedin! ❌").then(mesaj4 => {
                setTimeout(function () {
                  mesaj4.delete()
                }, 3000);
              });            
        }
    }
}

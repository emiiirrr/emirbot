module.exports = {
  kod: "ban",
  async run (client, message, args) {
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('Bunu yapamazsın! ❌').then(mesaj1 => {
      setTimeout(function () {
        mesaj1.delete()
      }, 5000);
    });
    const args1 = message.content.split(' ').slice(2)
    const neden = args1.join(" ")
    const { MessageEmbed } = require('discord.js')
    message.delete(message.author)
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban('Optional reason that will display in the audit logs')
          .then(() => {
            //const kanal = message.guild.channels.cache.find(ch => ch.name === 'bot-komut')
            const embed = new  MessageEmbed()
            .setTitle('📌LOG OLAYI')
            .setColor("RED")
            .setFooter(`${message.author.tag} Tarafından banlandı.`, `${message.author.displayAvatarURL({ dynamic: true })}`)
            .setDescription('Olay: `Ban`')
            .addField('📌Kişi:', member)
            .addField('📌Neden:', neden)
            message.channel.send(embed)
          })
          .catch(err => {
            message.reply('Bu kullanıcıyı banlayamam! ❌').then(mesaj2 => {
              setTimeout(function () {
                mesaj2.delete()
              }, 5000);
            });
            console.error(err);
          });
      } else {
        message.reply("Kullanıcı bu sunucuda değil! ❌").then(mesaj3 => {
          setTimeout(function () {
            mesaj3.delete()
          }, 5000);
        });
      }
    } else {
      message.reply("Banlanacak kullanıcıyı etiketlemedin! ❌").then(mesaj4 => {
        setTimeout(function () {
          mesaj4.delete()
        }, 5000);
      });
    }
  }
}

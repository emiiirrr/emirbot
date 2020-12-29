module.exports = {
    kod: "sil",
    async run (client, message, args) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Bunu yapamazsın! ❌').then(mesaj1 => {
        setTimeout(() => {
          mesaj1.delete()
        }, 5000);
      });
      if (isNaN(args)) return message.reply('Lütfen sayı girin. ❌').then(mesaj2 => {
        setTimeout(() => {
          mesaj2.delete()
        }, 5000);
      });
      if (args < 2 || args > 100) return message.reply('Lütfen 2 ve 100 arasında bir sayı girin. ❌').then(mesaj3 => {
        setTimeout(() => {
          mesaj3.delete()
        }, 5000);
      });
      message.channel.bulkDelete(Number(args))
      const { MessageEmbed } = require('discord.js')
      const embed = new MessageEmbed()
      .setTitle('Mesajlar silindi. ✔️')
      .setColor("RANDOM")
      .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
      .setDescription('Silinen mesaj sayısı: ' + args)
      message.channel.send(embed).then(mesaj => {
          setTimeout(function () {
              mesaj.delete()
          }, 5000);
      })
    }
  }

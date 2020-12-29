module.exports = {
    kod: "duyur",
    async run (client, message, args) {
      const args1 = message.content.split(' ').slice(1)
      const botmesajı = args1.join(" ")
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Bunu yapamazsın! ❌').then(mesaj1 => {
          setTimeout(function () {
              mesaj1.delete()
          }, 5000);
      });
      if (!botmesajı) return message.reply('Duyurunun ne olacağını yazmadın! ❌').then(mesaj2 => {
          setTimeout(function () {
              mesaj2.delete()
          }, 5000);
      });
      message.delete(message.author);
      const { MessageEmbed } = require('discord.js')
      const embed = new MessageEmbed()
      .setTitle('**DUYURU!📣**')
      .setColor("RANDOM")
      .setDescription(botmesajı)
      .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true })}`);
      message.channel.send({ embed: embed}).then( embedMessage => {
        embedMessage.react("📣");
      })
    }
  }
  
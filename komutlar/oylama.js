module.exports = {
    kod: "oyla",
    async run (client, message, args) {
      const args1 = message.content.split(' ').slice(1)
      const botmesajı = args1.join(" ")
      //if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Bunu yapamazsın! ❌');
      if (!botmesajı) return message.reply('Oylamanın ne olacağını yazmadın! ❌').then(mesaj1 => {
          setTimeout(function () {
             mesaj1.delete() 
          }, 5000);
      });
      message.delete(message.author)
      const { MessageEmbed } = require('discord.js')
      const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
      .setDescription(botmesajı);
      message.channel.send({ embed: embed}).then( embedMessage => {
        embedMessage.react("👍")
        embedMessage.react("👎")
        embedMessage.react("🤷");
      })
    }
  }
  
module.exports = {
  kod: "ping",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('Ping Ölçülüyor...')
    .setColor("RED")
    .setDescription(`${client.user.tag}`)
    .setThumbnail('https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif')
    message.channel.send(embed).then(editmesajı => {
    setTimeout(function () {
      const ping = new MessageEmbed()
      .setTitle('Ping 🛑')
      .setColor("RED")
      .setFooter(`${client.user.tag}`, `${client.user.displayAvatarURL()}`)
      .addField('Botun Pingi 🔧', client.ws.ping + ' ms')
      .addField('Mesaj Gecikme Süresi 🔧',  `${Date.now() - message.createdTimestamp} ms`)
      editmesajı.edit(ping)
    }, 3000);
  })    
  }
}

const Discord = require('discord.js') // discord.js modülü tanımlıyoruz.
const client = new Discord.Client() // client tanımalamsı
const { readdirSync } = require('fs'); // tanımlamalar
const { join } = require('path'); // tanımlamalar
const { Client, MessageEmbed } = require('discord.js');
const { TOKEN, PREFIX } = require("./config.json")

client.commands= new Discord.Collection(); // komutları alıyoruz

client.prefix = PREFIX

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command); // Komutları Ayarlıyoruz.
}

client.on("error", console.error);

client.on('ready', () => {
  console.log(`Botun geldi kanka ${client.user.tag}!`)
  const durumlar = [
    "Yardım için -> e?yardım",
    "Emiiirrr⌁#6152",
    `${client.guilds.cache.size} Sunucu`
  ]
  setInterval(function () {
    let durum = durumlar[Math.floor(Math.random()*durumlar.length)]
    client.user.setActivity(durum)
  }, 10000)
  client.user.setStatus('online')
});
client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(PREFIX)) {
        const args = message.content.slice(PREFIX.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return message.channel.send(`Komut dosyamda **${command}** adlı bir komut bulamadım.`);


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})


//BURADAN BAŞLAR

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!şadi') {
    msg.channel.send('Balım');
  }
  if (msg.content.toLowerCase() === '!bug') {
    msg.channel.send('!bug');
  }
  if (msg.content.toLowerCase() === '!emre') {
    msg.channel.send('Kuzuummm');
  }
  if (msg.content.toLowerCase() === 'adem out') {
    msg.delete(msg.author)
    const adem = new MessageEmbed()
    .setTitle('***Uçabildiğin kadar uç...***')
    .setAuthor('Adem out')
    .setColor("RANDOM")
    .setImage('https://media.giphy.com/media/HpegoSJeLAMkyilldk/giphy.gif');
    msg.channel.send(adem);
  }
  if (msg.content.toLowerCase() === 'üzdüm mü seni') {
    msg.channel.send('Kalbim çıt, gözyaşım pıt');
  }
});


client.on('guildBanAdd' , (guild, user) => {
  let genel = guild.channels.find('name', 'genel');
  if (!genel) return;
  genel.send('' );
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kaaninho out') {
    msg.delete(msg.author)
    const kaan = new MessageEmbed()
    .setTitle('***Bravo six going dark...***')
    .setAuthor('Kaaninho out')
    .setColor("RANDOM")
    .setImage('https://media.giphy.com/media/jQGE7t0qcFYzr3EHsF/giphy.gif');
    msg.channel.send(kaan)
  }
});


client.login(TOKEN)

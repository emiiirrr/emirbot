const Discord = require('discord.js')
const client = new Discord.Client()
const { readdirSync } = require('fs'); 
const { join } = require('path'); 
const { Client, MessageEmbed } = require('discord.js');
const { TOKEN, PREFIX } = require("./config.json")

client.commands= new Discord.Collection();

client.prefix = PREFIX

const cmd = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); 
for (const file of cmd) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command);
    
}

client.on("error", console.error);

client.on("message", async message => {
  if(message.author.bot) return;

  if(message.content.startsWith(PREFIX)) {
      const args = message.content.slice(PREFIX.length).trim().split(/ +/);
      const command = args.shift().toLowerCase();

      if(!client.commands.has(command)) return message.channel.send(`Komut dosyamda **${command}** adlı bir komut bulamadım.`);
      
      if (!command) return;

      try {
          client.commands.get(command).run(client, message, args);

      } catch (error){
          console.error(error);
      }
  }
});

client.on('ready', () => {
  console.log(`Botun geldi kanka ${client.user.tag}!`)
  const durumlar = [
    "Yardım için -> e?yardım",
    "Emiiirrr⌁#6152",
    `${client.guilds.cache.size} Sunucudayım!`
  ]
  setInterval(function () {
    let durum = durumlar[Math.floor(Math.random()*durumlar.length)]
    client.user.setActivity(durum)
  }, 10000)
  client.user.setStatus('online')
});

//BURADAN BAŞLAR

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'adem out') {
    msg.delete(msg.author)
    const adem = new MessageEmbed()
    .setTitle('***Uçabildiğin kadar uç...***')
    .setAuthor('Adem Out')
    .setColor("RANDOM")
    .setImage('https://media.giphy.com/media/HpegoSJeLAMkyilldk/giphy.gif');
    msg.channel.send(adem);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kaaninho out') {
    msg.delete(msg.author)
    const kaan = new MessageEmbed()
    .setTitle('***Bravo six going dark...***')
    .setAuthor('Kaaninho Out')
    .setColor("RANDOM")
    .setImage('https://media.giphy.com/media/jQGE7t0qcFYzr3EHsF/giphy.gif');
    msg.channel.send(kaan)
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ali out') {
    msg.delete(msg.author)
    const ali = new MessageEmbed()
    .setAuthor('Ali Out')
    .setColor("RANDOM")
    .setImage('https://media1.tenor.com/images/ccd44330b921bba21e897e708955e722/tenor.gif');
    msg.channel.send(ali)
  }
});

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'elif out') {
    message.delete(message.author)
    const elif = new MessageEmbed()
    .setAuthor('Elif Out')
    .setColor("RED")
    .setImage('https://media1.tenor.com/images/300209b23f0e0470931912cdaf6924de/tenor.gif')
    message.channel.send(elif)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'şevval out') {
    message.delete(message.author)
    const şevval = new MessageEmbed()
    .setAuthor(`Söylemediniz`)
    .setColor("RED")
    .setImage('https://blog.hubspot.com/hubfs/Shrug-Emoji.jpg')
    message.channel.send(şevval)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'emine out') {
    message.delete(message.author)
    const emine = new MessageEmbed()
    .setAuthor('Söylemediniz ')
    .setColor("RED")
    .setImage('https://blog.hubspot.com/hubfs/Shrug-Emoji.jpg')
    message.channel.send(emine)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'ömer out') {
    message.delete(message.author)
    const ömer = new MessageEmbed()
    .setAuthor('Ömer Out')
    .setColor("RED")
    .setImage('https://media1.tenor.com/images/a674181d59056ab132376921367eb266/tenor.gif')
    message.channel.send(ömer)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'yogurt out') {
    message.delete(message.author)
    const elifnaz = new MessageEmbed()
    .setTitle('Bihter kaçar')
    .setAuthor('Yogurt Out')
    .setColor("RED")
    .setImage('https://media.giphy.com/media/s7cP0gvnf4uy1RwCLg/giphy.gif')
    message.channel.send(elifnaz)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'tuna out') {
    message.delete(message.author)
    const tuna = new MessageEmbed()
    .setTitle('Behlül kaçar')
    .setAuthor('Tuna Out')
    .setColor("RED")
    .setImage('https://i.ibb.co/ZczBH2v/images-3.jpg')
    message.channel.send(tuna)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'nes out') {
    message.delete(message.author)
    const nes = new MessageEmbed()
    .setAuthor('Enesquik Out')
    .setColor("RED")
    .setImage('https://media.giphy.com/media/V4efeXVTdKExy/giphy.gif')
    message.channel.send(nes)
  }
})

client.login(TOKEN)

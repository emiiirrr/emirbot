const { MessageEmbed } = require('discord.js')
module.exports = {
    kod: "bruh",
    async run (client, message, args) {
        var Gifler = [
            'https://media.tenor.com/images/f90c88e13d5b2f5ae5feb6b441c61935/tenor.gif',
            'https://i.makeagif.com/media/3-04-2015/_OVkve.gif',
            'https://media.tenor.com/images/5acff393510615cb26e5c353255e7880/tenor.gif',
            'https://i.makeagif.com/media/7-18-2015/_t6ZwQ.gif',
            'https://img-s1.onedio.com/id-59e0a5d0818dc0a50e2fd794/rev-0/w-500/s-2408072ab1256cd03c63a3f753091905892bb327.gif',
            'https://tenor.com/bsHPX.gif',
            'https://tenor.com/boI0H.gif',
            'https://tenor.com/brUbp.gif',
            'https://tenor.com/bl73M.gif',
            'https://media.giphy.com/media/2dayZAfIAuQHS/giphy.gif',
            'https://media.giphy.com/media/kWp8QC99Z6xFn8bF0v/giphy.gif',
            'https://i.ytimg.com/vi/PabLdoU71RY/maxresdefault.jpg',
            'https://i.ytimg.com/vi/w5DTlp4HicA/hqdefault.jpg',
            'https://i.ytimg.com/vi/ACgLbKuyDlg/hqdefault.jpg',
            'https://lh3.googleusercontent.com/proxy/fZi24IMnMQupbplRkYY4ccGa52XmTa5L-3rrm6IPwuEDq7lqbqiUjIDBYVRQuQV1_lqM0BniVxPSiCjGXizf3gY3kEA5HzkrV5Yp1iexxyaYUN_YTlAYzPbAAlKHW3pS7YhLhOxx3ndLawINau1z0e5D58mwqQD3Ds8',
            'https://img-s2.onedio.com/id-5a7af0b9f03a0b794b5f7987/rev-0/w-900/h-880/f-jpg/s-07b59fb5ec917ecec4ff68c60cfe293ef0be8b07.jpg',
            'https://i.redd.it/qi6exzh9zfo41.jpg',
            'https://i.redd.it/6h12aduyfdn41.jpg',
            'https://i.redd.it/niuk0e4tv7h51.jpg',
            'https://pbs.twimg.com/media/EiqW9QnWoAENyeV.jpg',
            'https://i.pinimg.com/originals/fc/2a/56/fc2a56800981f74b13d03a1e657c71d8.jpg',
            'https://media1.tenor.com/images/4139e30339c082cd0fc2d1581bdd35a0/tenor.gif',
            'https://media1.tenor.com/images/b9c9eb0283047adc36932d5992813ac9/tenor.gif',
            'https://media1.tenor.com/images/60f5e615a68fab018c4f13424c4c178a/tenor.gif',
            'https://media1.tenor.com/images/dc6777e9b1f7e63ae3c55a135684ee0d/tenor.gif',
            'https://media1.tenor.com/images/9039b18dabe39460fdfafc63f95ce341/tenor.gif',
            'https://media1.tenor.com/images/c639ce6c979dc13261311a8175670d5d/tenor.gif',
            'https://i.redd.it/qmrby66k1je41.png'
        ];
        var gif = Math.floor(Math.random()*Gifler.length);
        const embed = new MessageEmbed()
        .setImage(`${Gifler[gif]}`);
        message.channel.send(embed)
    }
}

const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '!';

const token = 'NTkwOTQ2NTQ3NjI2Mjc4OTMy.XQpn9Q.1TXrNgyae9-9TbHKPrX7WWi_2D8';

bot.on('ready', () =>{
    console.log('Your bot is online!')
})

bot.on('message', message =>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.reply('pong!');
            break;
        case 'agree':
            message.reply('Welcome to the T.S Kent Discord Server!')
            message.channel.bulkDelete(args[0]);
            break;
    }
})

bot.on('ready', () => {
    console.log('I am ready!');
  });



bot.login(token);
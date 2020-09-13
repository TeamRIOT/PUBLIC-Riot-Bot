require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`)
});

client.on('message', function(message) {
    if(message.content === 'R!hello')
    	message.reply('hello there!')
});

client.on('message', function(message) {
    if(message.content === 'R!help')
    	message.reply('Go play minecraft or some shit!')
});
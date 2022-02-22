// Require the necessary discord.js classes

const Discord = require('discord.js')
const client = new Discord.Client()
// const config = require('./config.json');

// When the client is ready, run this code (only once)
client.on('ready', () => {
    console.log('Ready!');
});

// when bot is pinged reply pong
client.on("message", msg => {
    if (msg.content === "ping") {
        msg.reply("pong")
    }
});

// Login to Discord with your client's token
client.login(process.env.PRTS_TOKEN);

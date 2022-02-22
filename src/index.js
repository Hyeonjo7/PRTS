// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
// const config = require('./config.json');

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});

// Login to Discord with your client's token
client.login(process.env.PRTS_TOKEN);


client.on('message', msg => {
    if (msg.author.bot) return

    if (msg.content === "$help") {
        msg.channel.send('no u')
    }
})
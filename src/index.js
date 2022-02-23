// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const channel = client.channels.cache.get('id');
const prefix = "!";
// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('PRTS is Online.');
});


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});

client.on("message", async (message) => {

	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	let command = message.content.split(" ")[0];
	command = command.slice(0, 1);

	if (command === "ping") {
		message.channel.send("Pong!");
	}

});

// Login to Discord with your client's token
client.login(process.env.PRTS_TOKEN);

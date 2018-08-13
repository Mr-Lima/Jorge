const fs = require('fs');

// requerindo o modulo discord.js
const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

// criando um novo Discord client
const client = new Discord.Client();

const cooldowns = new Discord.Collection();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands');

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// quando o client estiver pronto, lance o codigo
// event trigger
// - terminar o login
// - reconectar apos disconectar
client.on('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();


	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('Sai fora bicho');
	}

	if (command.args && !args.length) {
		let reply = `Falta coisa, ${message.author}!`;
		if (command.usage) {
			reply += `\nFaça: \`${prefix}${command.name} ${command.usage}\``;
		}
		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (!timestamps.has(message.author.id)) {
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}
	else {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`Calmai!  ${timeLeft.toFixed(1)} pra poder usar \`${command.name}\` de novo.`);
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}

	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('Algo deu errado');
	}

});

// login no Discord usando app token
client.login(token);

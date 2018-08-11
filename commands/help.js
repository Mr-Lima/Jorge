const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'Lista de todos meus poderes',
	aliases: ['socorro'],
	usage: '[nome do comando]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Aqui mortal, uma lista de meus poderes!');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nVoce pode mandar \`${prefix}socorro [nome do comando]\` para saber mais!`);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('Te cutuquei uns comando via DM');
				})
				.catch(error => {
					console.error(`Nao achei voce ${message.author.tag}.\n`, error);
					message.reply('Parece que não consigo te mandar DM...babaca');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('Isso nao é um comando válido');
		}

		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} segundo(s)`);

		message.channel.send(data, { split: true });
	},
};

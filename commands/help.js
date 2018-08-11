const { prefix } = require('../config.json');

module.exports = {
	name: 'socorro',
	description: 'Como usar os comandos',
	aliases: ['socorro', 'help'],
	uses: '<nomeComando>',
	cooldown: 5,
	execute(message, args) {
		const { commands } = message.client;
		const data = [];

		if (!args.length) {
			data.push('Meus esquema:');
			data.push(commands.map(command => command.name).join(', '));
			data.push('\nManda um `{prefix}help [nome do esquema]` que eu explaino o bagulho');
		}
		else {
			if (!commands.has(args[0])) {
				return message.reply('comando invalido!');
			}

			const command = commands.get(args[0]);

			data.push(`**Name:** ${command.name}`);

			if (command.description) data.push(`**Descricao:** ${command.description}`);
			if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
			if (command.usage) data.push(`**Usos:** ${prefix}${command.name} ${command.usage}`);

			data.push(`**Cooldown:** ${command.cooldown || 3} segundos`);
		}
	},
};

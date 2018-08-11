module.exports = {
	name: 'abafar',
	description: ' apaga n mensagens anteriores ',
	aliases: ['abafar', 'clean'],
	usage: '[nome do comando] [numero de mensagens]',
	cooldown: 5,
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('Tu tem que dizer um numero, sequelado');
		}
		else if (amount <= 1 || amount > 100) {
			return message.reply('Entre 1 e 99');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('Algo deu errado');
		});
	},
};

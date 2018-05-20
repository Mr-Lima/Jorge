module.exports = {
	name: 'chutar',
	aliases: ['chutar', 'kick'],
	description: ' ',
	guildOnly: true,
	execute(message) {
		const taggedUser = message.mentions.users.first();
		if (!message.mentions.users.size) {
			return message.reply('...VOCE ESQUECEU DE FALAR QM, patetico');
		}
		message.channel.send(`${taggedUser.username} foi dar uma volta...  xd`);

	},
};

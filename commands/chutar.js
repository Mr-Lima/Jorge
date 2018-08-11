module.exports = {
	name: 'chutar',
	aliases: ['chutar', 'kick'],
	description: ' ',
	args: true,
	uses: '<@pessoa> <razao>',
	guildOnly: true,
	execute(message) {
		const taggedUser = message.mentions.users.first();
		if (!message.mentions.users.size) {
			return message.reply('...VOCE ESQUECEU DE FALAR QM, patetico');
		}
		taggedUser.kick();
		message.channel.send(`${taggedUser.username} foi dar uma volta...  xd`);
	},
};

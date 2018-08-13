module.exports = {
	name: 'chutar',
	aliases: ['chutar', 'kick'],
	description: 'manda alguem pra passear',
	args: true,
	uses: '<@pessoa> <razao>',
	guildOnly: true,
	execute(message) {
		const author = message.member;
		if(!author.hasPermission('KICK_MEMBERS', false, true, true)) {
			return message.reply('YOU ARE NOT PREPARED!');
		}
		const taggedUser = message.mentions.members.first();
		if (!message.mentions.users.size) {
			return message.reply('...VOCE ESQUECEU DE FALAR QM, patetico');
		}
		taggedUser.kick().then((taggedUser) => {
			message.channel.send(`${taggedUser.displayName} tomou um lightning bolt xd :zap:`);
		}).catch(() => {
			message.channel.send('Pau no cu');
		});
	},
};

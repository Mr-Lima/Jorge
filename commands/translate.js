module.exports = {
	name: 'translate',
	description: 'falar',
	cooldown: 3,
	aliases: ['fala'],
	args: false,
	uses: [''],
	guildOnly: false,
	execute(message) {
		const messagem = message.toString().substring(11);
		message.channel.send(messagem, { tts: true });
	},
};

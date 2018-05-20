module.exports = {
	name: 'honra',
	description: ' ',
	execute(message) {
		message.channel.send(`AQUI É ${message.guild.name.toUpperCase()} CARAI`);
	},
};

module.exports = {
	name: 'Mostrar',
	description: ' ',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`${message.author.displayAvatarURL}`);
		}
		else {
			const arrayUsers = message.mentions.users.map(user => {
				return `${user.username} ${user.displayAvatarURL}`;
			});
			message.channel.send(`Lindos do pai\n\n${arrayUsers}`);
		}
	},
};

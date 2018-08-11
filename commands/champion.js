module.exports = {
	name: 'champion',
	description: ' ',
	execute(message) {
		const champions = ['Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia',
			'Annie', 'Ashe', 'Blitzcrank', 'Brand', 'Caitlyn', 'Cassiopeia',
			'Cho gath', 'Corki', 'Dr. Mundo', 'Evelynn', 'Ezreal', 'Fiddlesticks',
			'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gragas', 'Graves',
			'Hecarim', 'Heimerdinger', 'Irelia', 'Janna', 'Jarvan IV', 'Jax',
			'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kennen',
			'Kog Maw', 'LeBlanc', 'Lee Sin', 'Leona', 'Lulu', 'Lux',
			'Malphite', 'Malzahar', 'Maokai', 'Master Yi', 'Miss Fortune',
			'Mordekaiser', 'Morgana', 'Nasus', 'Nautilus', 'Nidalee',
			'Nocturne', 'Nunu', 'Olaf', 'Orianna', 'Pantheon', 'Poppy',
			'Rammus', 'Renekton', 'Riven', 'Rumble', 'Ryze', 'Sejuani',
			'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir',
			'Skarner', 'Sona', 'Soraka', 'Swain', 'Talon', 'Taric',
			'Teemo', 'Tristana', 'Trundle', 'Trydamere', 'Twisted Fate',
			'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar',
			'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong',
			'Xerath', 'Xin Zhao', 'Yorick', 'Ziggs', 'Zilean'];

		message.channel.send(' ' + champions[Math.floor(Math.random() * champions.length)]);
	},
};

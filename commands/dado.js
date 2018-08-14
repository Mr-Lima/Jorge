module.exports = {
	name: 'd',
	description: 'Arremessa com grandeza um dado na mesa',
	cooldown: 3,
	aliases: ['dado', 'd'],
	args: false,
	uses: [''],
	guildOnly: false,
	execute(message) {
		// EXIBIR RESULTADOS SEPARADOS E DEPOIS O RESULTADO
		const aux = message.content.substring(2);
		const arrayInput = aux.split('d');
		let numberDices = 0;
		let diceNumber = 0;
		diceNumber = parseInt(arrayInput[1]);
		numberDices += parseInt(arrayInput[0]);
		const result = numberDices * (Math.floor((Math.random() * diceNumber) + 1));
		message.reply(`Resultado: ${result}`);
	},
};

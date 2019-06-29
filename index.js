const Discord = require('discord.js')
const bot = new Discord.Client()

//instance
bot.on('ready', function () {
	bot.user.setGame('Rotation dans la Voie lactée').catch(console.error)
	console.log('//////////////////////////')
	console.log('  connection réussit !')
	console.log('//////////////////////////')
})

bot.on('message', function (message) {

	if (message.content === '>help') {
		let help = new Discord.RichEmbed()
				.setColor("#2B00FF")
				.addField("Les commandes : \n\n >server \n >help \n >invit")
				.setFooter(".")
			message.channel.send(help)
			console.log('--------------------------------------')
			console.log('commande >help utilée par :')
			console.log('--------------------------------------')
	}

	if (message.content === '>server') {
		let server_name = message.guild.name 
		let server_size = message.guild.members.size 
		let server = new Discord.RichEmbed()	
			.setColor("#2B00FF")
			.addField('serveur : ' + server_name + '\n\nNombre de membres : ' + server_size)
			.setFooter(".")
		message.channel.send(server)
		console.log('--------------------------------------')
		console.log('commande >server utilée par :')
		console.log('--------------------------------------')
	}

		if (message.content === '>invit') {
			let invit = new Discord.RichEmbed()
				.setColor("#2B00FF")
				.addField("Lien d'invitation au serveur :", "https://discord.gg/s3F3GGE")
				.setFooter(".")
			message.channel.send(invit)
			console.log('--------------------------------------')
			console.log('commande >invit utilée par :')
			console.log('--------------------------------------')
	}


})



bot.login(process.env.TOKEN)

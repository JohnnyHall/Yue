const fetch = require('node-fetch');

const Discord = require('discord.js');

module.exports = {

    async run (client, message, args){

        let countries = args.join(" ");

      

        const noArgs = new Discord.MessageEmbed()
  .setTitle('Casos da "gripezinha"')
	.setDescription('Digite *covid, em seguida escreva uma das duas opções a baixo, exemplo:\n*covid brazil')
	.setThumbnail('https://municipioonline.com.br/design/images/gif/corona-virus.gif')
	.addFields(
		{ name: '*All*', value: 'Para ver os status de COVID-19 no mundo inteiro.', inline: true },
		{ name: '*Algum Pais*', value: 'Para ver os status de COVID-19 em um país específico.', inline: true },
	)
	.setFooter('Yue Bot | by JohnnyHall#5299', 'https://i.imgur.com/bYxVNcY.png');

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()          
                .setTitle(`Status de COVID-19 no mundo 🌎`)
                .addField('Casos confirmados', confirmed)
                .addField('Recuperados', recovered)
                .addField('Mortes', deaths)

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Status de COVID-19 no país: **${countries}**`)
                .addField('Casos confirmados', confirmed)
                .addField('Recuperados', recovered)
                .addField('Mortes', deaths)

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('País inválido')
            })
        }
    }
}
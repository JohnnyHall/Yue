const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {

    async run (client, message, args){

        

        const capivara = new Discord.MessageEmbed()
        .setThumbnail('https://i.imgur.com/bYxVNcY.png')
        .setTitle('GIFs dos membros do Capivara!!')
        .addField('`Joao:`', 'Joao\nJoaoBailarina\nJoaoBailarina2\nJoaoPernocas')
        .addField('`Nicolas:`', 'Nicolas\nNicolasDeFerro')
        .addField('`Bala:`', 'Bala')
        .addField('`Enzo:`', 'EnzoHomao')
        .addField('`Pedro:`', 'Pedro')

        const anime = new Discord.MessageEmbed()
        .setThumbnail('https://i.imgur.com/bYxVNcY.png')
        .setTitle('GIFs momentâneos de Anime!!')
        .setDescription('Raiva\nTristeza\nMedo\nAlegria')



        const pages = [
                capivara,
                anime,
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '40000';

        pagination(message, pages, emojiList, timeout)
    }
}
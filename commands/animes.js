const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {

    async run (client, message, args){

        

        const a = new Discord.MessageEmbed()
        .setThumbnail('https://i.imgur.com/bYxVNcY.png')
        .setTitle('Animes semanais!!')
        .addField('`Terça`', '[Black Clover](https://goyabu.com/assistir/black-clover/)')
        .addField('`Quarta`', '[Kimi to Boku](https://goyabu.com/assistir/kimi-to-boku-no-saigo-no-senjou-aruiwa-sekai-ga-hajimaru-seisen/)')
        .addField('`Quinta`', '[Higurashi](https://goyabu.com/assistir/higurashi-no-naku-koro-ni-2020/)')  
        .addField('`Sexta`', '[Tonikawa Kawaii](https://goyabu.com/assistir/tonikaku-kawaii/)\n[Dungeon ni Deai](https://goyabu.com/assistir/dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-iii/)\n[Fire force](https://goyabu.com/assistir/enen-no-shouboutai-ni-no-shou/)\n[Jujutsu Kaisen](https://goyabu.com/assistir/jujutsu-kaisen-tv/)\n[I am standing on 1,000,000 lives.](https://goyabu.com/assistir/100-man-no-inochi-no-ue-ni-ore-wa-tatteiru/)') 
        .addField('`Sabado`', '[Mahouka](https://goyabu.com/assistir/mahouka-koukou-no-rettousei-raihousha-hen/)')  
        .addField('`Domingo`', '[Munou na Nana](https://goyabu.com/assistir/munou-na-nana/)')

        const b = new Discord.MessageEmbed()
        .setThumbnail('https://i.imgur.com/bYxVNcY.png')
        .setTitle('MyAnimeList!!')
        .addField('`Pessoas:`', '[JohnnyHall](https://myanimelist.net/profile/JohnnyHall)\n[Pedrow](https://myanimelist.net/profile/Dragon1092)\n[Felipao](https://myanimelist.net/profile/zStorm2k20)\n[Bell](https://myanimelist.net/profile/pipocasuicida)\n[Campinas](https://myanimelist.net/profile/Xapel)')

        const pages = [
                a,
                b,

        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '40000';

        pagination(message, pages, emojiList, timeout)
    }
}
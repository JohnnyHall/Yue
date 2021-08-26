const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
  

    async run (client, message, args){

        

        const fun = new Discord.MessageEmbed()
        .setThumbnail('https://i.imgur.com/bYxVNcY.png')
        .setTitle('Fun✨')
        .addField('`*Avatar`', 'Mostra a sua foto de perfil.')
        .addField('`*Kiss`', 'Da um beijão em alguem.')
        .addField('`*Murro`', 'Da um murro em alguem.')
        .addField('`*Meme`', 'Envia um meme.')
        .addField('`*Coinflip`', 'É um jogo de cara ou coroa.')
        .addField('`*Fox`', 'Mostra imagens e fatos aleatorios sobre raposas.')
        .addField('`*Remoji`', 'Envia um emoji aleatorio.')
        .addField('`*Alife`', 'Mostra seu ralacionamento com uma pessoa em outra vida.')
        .addField('`*Amizade`', 'Mostra seu nivel de amizade com outra pessoa.')

        const utility = new Discord.MessageEmbed()
        .setThumbnail('https://i.imgur.com/bYxVNcY.png')
        .setTitle('Utlity💡')
        .addField('`*Ping`', 'Ele mostra o ping.')
        .addField('`*Say`', 'A Yue fala uma oque você escrever.')
        .addField('`*Uptime`', 'Mostra o tempo em que a Yue esta ligada.')
        .addField('`*Post`', 'Faz uma postagem no canal geral.')
        .addField('`*Calculate`', 'É uma calculadora, digite uma conta depois do Calculate.')
        .addField('`*Userinfo`', 'Faz um resumo sobre o perfil da pessoa.')
        .addField('`*Serverinfo`', 'Faz um resumo sobre o server.')
        .addField('`*Yueinfo`', 'Faz um resumo sobre a Yue.')
        .addField('`*BotInvite`', 'Manda o link de convite para Bots.')
        .addField('`*Id`', 'Mostra o seu ID.')

        const animes = new Discord.MessageEmbed()
        .setThumbnail('https://i.imgur.com/bYxVNcY.png')
        .setTitle('Animes🎌')
        .addField('`*Anime`', 'Faz uma sinopse do anime que você pesquisar.')
        .addField('`*Animes`', 'Um geral sobre animes.')

        const world  = new Discord.MessageEmbed()
        .setThumbnail('https://i.imgur.com/bYxVNcY.png')
        .setTitle('World🌎')
        .addField('`*Covid`', 'Relata os casos de covid não só no brasil com no mundo inteiro.')
        .addField('`*Weather`', 'Mostra a previsão do tempo.')

        const moderation  = new Discord.MessageEmbed()
        .setThumbnail('https://i.imgur.com/bYxVNcY.png')
        .setTitle('Moderation💬')
        .addField('`*Benchmark`', 'Compete com o bot o UwU.')
        .addField('`*Nbans`', 'Mostra o numero de bans no server.')
        .addField('`*Restart`', 'Da restart na Yue.')
        .addField('`*-`', 'Apaga mensagens.')
        .addField('`*Msg`', 'Manda alguma mensagem no DM da pessoa marcada.')
        .addField('`*PostR`', 'Fazer um anuncio no Round-Table.')
        .addField('`*Antiraid`', 'Esse comando evita raids no server quando ele é ativado.')
        .addField('`*Kick`', 'Expusa uma pessoa do server.')
        .addField('`*Nservers`', 'Mostra em quantos servers a Yue está.')

        const write  = new Discord.MessageEmbed()
        .setThumbnail('https://i.imgur.com/bYxVNcY.png')
        .setTitle('Write🖊️')
        .addField('`*Conquista`', 'Cria uma imagem com sua frase sobrescrevendo uma imagem de conquista do minecraft.')
        .addField('`*Retro`', 'Cria uma imagem com sua frase sobrescrevendo uma imagem retro.')
        .addField('`*Emojit`', 'Reescreve em emoji o texto que você digitar.')
        .addField('`*Ascii`', 'Tudo que você escrever depois desse comando ele vai transformar em ascii.')
        .addField('`*Morse`', 'Reescreve em código morse o texto que você digitar.')
        .addField('`*Robo`', 'Faz o bot Clyde falar oque você escrever.')
        .addField('`*Putin`', 'Escreve uma mensagem com o gif do Putin.')

        const gif  = new Discord.MessageEmbed()
        .setThumbnail('https://i.imgur.com/bYxVNcY.png')
        .setTitle('Gifs😀')
        .addField('`*Gif`', 'O bot manda gifs personalizados.')
        .addField('`*GifList`', 'Mostra a list de Gifs personalizados.')

        const games = new Discord.MessageEmbed()
        .setThumbnail('https://i.imgur.com/bYxVNcY.png')
        .setTitle('Games🎮')
        .addField('`*Osu`', 'Obtém informações sobre um usuário de Osu!')
        .addField('`*Among`', 'Chama todo mundo pra jogar among.')
        .addField('`*Quiz`', 'Faz um quiz.')
        .addField('`*Vidente`', 'Esse comando ve o fututo e responde sua pergunta.')
        .addField('`*Dado`', 'Gira um dado.')
        .addField('`*Forca`', 'Cria um jogo de forca.')
        .addField('`*Jokempo`', 'É um jogo de Pedra, papel e tesoura.')


        const pages = [
                fun,
                world,
                games,
                write,
                gif,
                animes,
                utility,
                moderation,
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '40000';

        pagination(message, pages, emojiList, timeout)
    }
}
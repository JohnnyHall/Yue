const Discord = require('discord.js');

module.exports = {
  run: async (bot, message, args) => {
    message.delete().catch(O_o => { });

    var raiva = [
      'https://64.media.tumblr.com/bf264c4516a3a55a68bf032eef11d790/tumblr_inline_p8qkj1lj0m1qgcvsy_500.gifv',
      'https://pa1.narvii.com/6443/30a4cb7e597f2a34f17a0fbc4fc39567add939ad_hq.gif',
      'https://pa1.narvii.com/6242/0068e8b7a7a55bc9324274f9abb5a41729a34e30_hq.gif',
      'https://cdn-ak.f.st-hatena.com/images/fotolife/p/pema/20110114/20110114195935.gif',
      'https://media.tenor.com/images/ef795689617a8c97379b297fd7557235/tenor.gif'
    ];
    var rraiva = raiva[Math.floor(Math.random() * raiva.length)];

    var tristeza = [
      'https://i.pinimg.com/originals/ff/6a/57/ff6a57a6f237042c48ac455735968745.gif',
      'https://media1.tenor.com/images/92ea6de3ac0c5059b80932b6e389e427/tenor.gif?itemid=9398370',
      'https://i.pinimg.com/originals/12/82/6d/12826d2aeee18e20d09d4d238f95a523.gif',
      'https://media.tenor.com/images/5a847598d3e22689ecf42a324209ab94/tenor.gif',
      'https://i.pinimg.com/originals/c9/68/fe/c968fe1f0c6682400c901306e8763bb7.gif',
      'https://horadomanga.files.wordpress.com/2016/10/final.gif?w=500'
    ];
    var rtristeza = tristeza[Math.floor(Math.random() * tristeza.length)];

    var medo = [
      'https://media.tenor.com/images/ca181a4e67777b672bdb7f408e9eceff/tenor.gif',
      'https://media.tenor.com/images/e3c2bee74806139d56d7c08b2b15d333/tenor.gif',
      'https://media.tenor.com/images/91f65a242816f3b1d024fad4834f45a6/tenor.gif',
      'https://i.imgur.com/dMecNcX.gif?noredirect',
      'https://media.tenor.com/images/55c089a4480108dde4b5bec69b48be5b/tenor.gif',
      'https://i.pinimg.com/originals/fb/37/41/fb3741a9977e769bd365fd6e1b835cdc.gif',
      'https://thumbs.gfycat.com/ShamefulScentedAmericancreamdraft-small.gif',
      'https://pa1.narvii.com/6490/fee426bf0ab2109f262eedfffcfc1ccf0e0c51e9_hq.gif'
    ];
    var rmedo = medo[Math.floor(Math.random() * medo.length)];

    var alegria = [
      'https://media.tenor.com/images/d8cfad6474c16477362df878df5aba70/tenor.gif',
      'https://giphy.com/gifs/HIDIVE-cute-anime-girl-happy-nanako-SVs0cQ0nLRsLNUadmn',
      'https://i.pinimg.com/originals/0f/98/47/0f9847a5f258da9a3bdccc3860f91eb5.gif',
      'https://giphy.com/gifs/happy-food-3Cm8cxtSHqu6Q',
      'https://media.tenor.com/images/d93523c4db7e20254c4dcd512029d51e/tenor.gif',
      'https://media1.tenor.com/images/7949fa1956a91740a5a7dbd488cbc572/tenor.gif?itemid=14114223',
      'https://i.pinimg.com/originals/c5/5e/5d/c55e5d7dca5c7a8e80d250e45593069b.gif',
      'https://i.imgur.com/Mzh3ZVE.gif',
      'https://i.pinimg.com/originals/56/1b/3e/561b3e3d0a78311d26282093ebdcf981.gif'
    ];
    var ralegria = alegria[Math.floor(Math.random() * alegria.length)];



    if (!args[0]) {
      message.reply("Coloque o nome de um GIF dopois do comando, para ver todos os GIFs digite ***Giflist**.");
    }
    //capivara joao
    if (args[0].toLowerCase() == "joao") {
      message.channel.send("https://tenor.com/view/joao-jo%c3%a3o-marmot-screaming-groundhog-gif-14856083");
    }
    if (args[0].toLowerCase() == "joaobailarina") {
      message.channel.send("https://media.discordapp.net/attachments/412632987721662475/774483054093664276/jao_dance.gif");
    }
    if (args[0].toLowerCase() == "joaobailarina2") {
      message.channel.send("https://media.discordapp.net/attachments/412632987721662475/774484045253050368/jao_aponta.gif");
    }
    if (args[0].toLowerCase() == "joaopernocas") {
      message.channel.send("https://imgur.com/eXrLjRY");
    }
    //capivara nicolas
    if (args[0].toLowerCase() == "nicolas") {
      message.channel.send("https://tenor.com/view/chris-evans-captain-america-wood-chopping-tear-chopping-gif-7713702");
    }
    if (args[0].toLowerCase() == "nicolasdeferro") {
      message.channel.send("https://imgur.com/a/2DYZ1lu");
    }
    //capivara bala
    if (args[0].toLowerCase() == "bala") {
      message.channel.send("https://imgur.com/PeSJi7y");
    }
    //capivara pedro
    if (args[0].toLowerCase() == "pedro") {
      message.channel.send("https://tenor.com/view/pedro-pedro-leonel-leonel-screaming-scream-gif-18825895");
    }
    //capivara enzo
    if (args[0].toLowerCase() == "enzohomao") {
      message.channel.send("https://cdn.discordapp.com/attachments/412632987721662475/776944366337523763/ENZO.gif");
    }
    /*-------------------------------------------------------------------------------------*/

    //anime raiva
    if (args[0].toLowerCase() == "raiva") {
      message.channel.send(rraiva);
    }
    //anime tristeza
    if (args[0].toLowerCase() == "tristeza") {
      message.channel.send(rtristeza);
    }
    //anime medo
    if (args[0].toLowerCase() == "medo") {
      message.channel.send(rmedo);
    }
    //anime alegria
    if (args[0].toLowerCase() == "alegria") {
      message.channel.send(ralegria);
    }
  }
}

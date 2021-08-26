const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://img.ibxk.com.br/2015/06/23/23174917219473.gif',
  'https://img.ibxk.com.br/2015/06/23/23174954456475.gif',
  'https://media.tenor.com/images/1a41621386f6b0f175f54478093df381/tenor.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Você precisa de alguem pra socar seu animal!!!');
}

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Soco na boca')
        .setDescription(`${message.author} comeu ${user} na porrada`)
        .setImage(rand)
        .setThumbnail(avatar)
  await message.channel.send(embed);
}
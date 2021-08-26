const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  var list = [
    'https://imgur.com/iclUiUN.gif',
    'https://imgur.com/lYQt9rx.gif',
    'https://imgur.com/w1TU5mR.gif',
    'https://cdn.lowgif.com/full/e6d866a3e99693c9-slimy-kiss-anime-manga-know-your-meme.gif',
    'https://i.makeagif.com/media/8-13-2018/jqanJ0.gif',
    'https://pa1.narvii.com/5832/b65b3178e18e6da8086ddcc2201580d9d6ce4d66_hq.gif',
    'https://i.pinimg.com/originals/32/d4/f0/32d4f0642ebb373e3eb072b2b91e6064.gif',
    'https://i.imgur.com/4Ad9iwh.gif',
    'https://thumbs.gfycat.com/InconsequentialMeaslyFly-size_restricted.gif'
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) {
    return message.reply('Você não pode beijar sua namorada imaginaria!!');
  }

  let avatar = message.author.displayAvatarURL({ format: 'png' });
  const embed = new Discord.MessageEmbed()
    .setTitle('Beijinhos')
    .setDescription(`${message.author} acabou de meter um linguão em ${user}\nSelinho não é beijo <@!292375499932434432>`)
    .setImage(rand)
    .setThumbnail(avatar)
  await message.channel.send(embed);
}
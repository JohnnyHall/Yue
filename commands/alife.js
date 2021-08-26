const Discord = require('discord.js');

exports.run = async (client, message, args) => {


var list = [
  'namorados <3',
  'amigos :)',
  'casados <3',
  'inimigos >:3',
  'irmãos :3',
  'primos :3',
  'colegas agiotas :3',
  'amantes :point_right: :point_left: '

];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido');
}
  const embed = new Discord.MessageEmbed()
	.setTitle(`Em outra vida 🌀`)
        .setDescription(`${message.author} e ${user} são ${rand}`)
  await message.channel.send(embed);
}
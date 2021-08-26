const Discord = require("discord.js");
const malScraper = require('mal-scraper');

module.exports = {

run: async (client, message, args) => {

const search = `${args}`;
if(!search)
return message.reply('Escreva o nome de um anime em seguida do comando.');

malScraper.getInfoFromName(search)
  .then((data) => {
  const malEmbed = new Discord.MessageEmbed()
    .setAuthor(`Resultado encontrados na MyAnimeList sobre o anime: ${args}`.split(',').join(' '))
    .setThumbnail(data.picture)
    .addField('Nome em Inglês', data.englishTitle, true)
    .addField('Nome em Japonês', data.japaneseTitle, true)
    .addField('Type', data.type, true)
    .addField('Episodeos', data.episodes, true)
    .addField('Faixa etária', data.rating, true)
    .addField('Terminou em', data.aired, true)
    .addField('Score', data.score, true)
    .addField('Score Stats', data.scoreStats, true)
    .addField('Link', data.url);

    message.channel.send(malEmbed);

  })
}
};
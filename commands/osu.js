  
const Discord = require('discord.js')
const osu = require('node-osu');
//PUT YOUR OSU API KEY INSIDE THE QUOTATION MARKS
const api = new osu.Api("97600fec52e89ef5a78741a7e1901659c57b0b28" , {
// END OF OSU API KEY
    notFoundAsError: true,
    completeScores: false 
})

module.exports = {


run: async (bot, message, args) => {
//command

let username = args[0]
  
  
if (!args[0]) return message.channel.send('Por favor, forneça um apelido de usuário válido! (osu!)')

api.getUser({u: username}).then(user => {
const osu = new Discord.MessageEmbed()
.setTitle('OSU!')
.setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
.addField('Nickname', user.name)
.addField('PP', Math.round(user.pp.raw))
.addField('Rank', user.pp.rank)
.addField('Level', Math.round(user.level))
.addField('Country', user.country)
.addField('Country Rank', user.pp.countryRank)
.addField('Playcount', user.counts.plays)
.addField('Accuracy', `${user.accuracyFormatted}`)
.setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
.addField('Link do perfil',`https://osu.ppy.sh/users/${user.name}`)
message.channel.send(osu)

})

}
};
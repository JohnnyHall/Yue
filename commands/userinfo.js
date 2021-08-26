const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {

    async run (client, message, args){
      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        

        const a = new Discord.MessageEmbed()
        .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
        .setTitle(`Status de ${user.user.username}`)
        .addField('`Nome`', user.user.username)
        .addField('`#️⃣`', `#${user.user.discriminator}`)
        .addField('`🆔`', user.user.id)
        .addField('`Atividade:`', user.presence.activities[0] ? user.presence.activities[0].name : `O usuario não esta jogando no momento`,)
        .addField('`Data de criação da conta:`', user.user.createdAt.toLocaleDateString("pt-br"))
        .addField('`Data de adesão no servidor:`', user.joinedAt.toLocaleDateString("pt-br"))


        const b = new Discord.MessageEmbed()
        .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
        .setTitle(`Cargos de ${user.user.username}`)
        .addField('`Cargos:`', user.roles.cache.map(role => role.toString()).join(" ,"))
        

        const pages = [
                a,
                b,
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '40000';

        pagination(message, pages, emojiList, timeout)
    }
}
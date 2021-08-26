const Discord = require('discord.js')
const fs = require('fs');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("você não tem permissão de `KICK_MEMBERS`")
    let member = message.mentions.members.first()

    const user = message.mentions.users.first();

    let prefix = config.prefix;  

    if(!member) return message.channel.send(`Para utilizar esse comando: ${prefix}kick <@Usuário> <Motivo>`)

        if(!member.bannable)
        return message.reply(":cry: Eu não posso expulsar esse usuário, ele pode ter um cargo maior que o meu.")

        let reason = args.slice(1).join(' ');

   let anuncioembed = new Discord.MessageEmbed()
   anuncioembed.setDescription(`Você está presta a expulsar o ${user.toString()} você tem certeza?`)
   anuncioembed.setTimestamp();
   
   return message.channel.send(anuncioembed).then(async msg => {
   
        await msg.react("✅") 

       const a1 = (reaction, user) => reaction.emoji.name ==='✅' && user.id === message.author.id
       const b1 = msg.createReactionCollector(a1, { time: 3000000 });
       
       b1.on("collect", c1 => {
        msg.delete(anuncioembed)
        if(!reason) reason = "Não informado"
        member.kick(reason)

         .catch(error => message.reply(`Desculpe ${message.author} não consegui, devido ao erro: ${error}`));

        let pEmbed = new Discord.MessageEmbed()

        .setDescription(`${user.toString()} foi expulso.\nMotivo: ${reason}`)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        
         msg.channel.send(pEmbed)

         const kick = new Discord.MessageEmbed()

         .setTitle('Expulsão:')
         .setDescription(`Membro punido: **${user}**\nAutor da punição: ${message.author}\nMotivo da punição: ${reason}`);
         let kickschannel = client.channels.cache.get('736378163201966171')
         if(!kickschannel) return message.channel.send(`${user} foi punido!`);
  
         message.delete().catch(O_o=>{});

         kickschannel.send(kick)
})
  b1.on("collect", c2 => {
    msg.delete(0) 
    
    })
})

}
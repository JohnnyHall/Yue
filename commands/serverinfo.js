const { MessageEmbed } = require('discord.js');

module.exports = {
    run: async (client, message, args) => {
        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        const embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setTitle(`Status do server`)
            .addFields(

                {
                    name: "Membros: ",
                    value: `O servidor tem ${message.guild.memberCount} membros!`,
                    inline: true
                },
                {
                    name: "Membros Online: ",
                    value: `Tem ${message.guild.members.cache.filter(member => member.presence.status !== "offline").size} membros online!`,
                    inline: true
                },
                {
                    name: "Total de Bots: ",
                    value: `Tem ${message.guild.members.cache.filter(m => m.user.bot).size} bots!`,
                    inline: true
                },
                {
                    name: "Data de criação: ",
                    value: message.guild.createdAt.toLocaleDateString("pt-br"),
                    inline: true
                },
                {
                    name: "Numero de cargos: ",
                    value: `Tem ${message.guild.roles.cache.size} cargos no server.`,
                    inline: true,
                },
                {
                    name: `🗺 Região: `,
                    value: region,
                    inline: true
                },
                {
                    name: 'Boosters: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `Tem ${message.guild.premiumSubscriptionCount} boosts` : `Ninguem esta dando boost :pleading_face: `,
                    inline: true
                },
                {
                    name: "Emojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `Tem ${message.guild.emojis.cache.size} emojis!` : 'O servidor não tem emojis proprios' ,
                    inline: true
                }
            )
        await message.channel.send(embed)
    }
}
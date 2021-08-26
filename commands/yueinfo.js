const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Yue Status')
            .addFields(
                {
                    name: '🌐 Servers',
                    value: `Servindo ${client.guilds.cache.size} servers.`,
                    inline: true
                },
                {
                    name: '📺 Canais',
                    value: `Servindo ${client.channels.cache.size} canais.`,
                    inline: true
                },
                {
                    name: '👥 Numero de usuarios',
                    value: `A prontidão de ${client.users.cache.size} pessoas`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: '📅 Data de nascimento',
                    value: client.user.createdAt,
                    inline: true
                },
                {
                    name: '🧾 Informação do host',
                    value: `Numero de core's: ${os.cpus().length}`,
                    inline: true
                }
            )
            .setFooter(`Yue foi criada: JohnnyHall#5299`)

        await message.channel.send(embed)
    }
}
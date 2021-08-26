const Discord = require('discord.js')

module.exports.run = async(client, message, channel) => {
    message.channel.send(`Estou em ${client.guilds.cache.size} servidores`)
}
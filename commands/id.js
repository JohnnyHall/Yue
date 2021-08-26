const Discord = require ('discord.js')

exports.run = async (client ,message) => {



    message.channel.send(`Seu id é: ${message.author.id}`)

}
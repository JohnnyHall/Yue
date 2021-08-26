module.exports = {
    run: async (client, message, args) => {
        if (message.author.id !== '310509939879837696') {
            return message.channel.send(`Você não tem permição para usar esse comando!`)
        }
        await message.channel.send(`Restarting bot...`)
        process.exit();
    }
}
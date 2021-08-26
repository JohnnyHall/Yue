const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {

    async run (client, message, args){

        if(!args[0]) return message.channel.send('Por favor, forneça uma pergunta.');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Por favor, forneça uma pergunta ** válida **')
        }

        const embed = new Discord.MessageEmbed()
        .setTitle('Calculadora')
        .addField('Questão', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Resposta', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
}
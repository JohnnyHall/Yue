const figlet = require('figlet');

module.exports = {
    async run (client, message, args){
      message.delete().catch(O_o => {});
        if(!args[0]) return message.channel.send('Escreva alguma coisa dopois do comando :)');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Algo de errado não esta certo :)');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Escreva um texto de no maximo 2000 caracteres :)')

            message.channel.send('```' + data + '```')
        })
    }
}
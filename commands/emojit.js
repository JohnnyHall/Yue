exports.run = async (_bot, message, args) => {
  message.delete().catch(O_o => { });
    if (args.length < 1) return message.reply("**Por favor, me dê algum texto para reescrever em emoji.**");
    let blockedChars = args.join(' ').toLowerCase()
    .replace(/[a-z]/g, ':regional_indicator_$&:')
    .replace(/1/g, ':one:')
    .replace(/2/g, ':two:')
    .replace(/3/g, ':three:')
    .replace(/4/g, ':four:')
    .replace(/5/g, ':five:')
    .replace(/6/g, ':six:')
    .replace(/7/g, ':seven:')
    .replace(/8/g, ':eight:')
    .replace(/9/g, ':nine:')
    .replace(/0/g, ':zero:');
    message.channel.send(blockedChars);
};

exports.help = {
    name:"blocktext",
    aliases: ['block']
}
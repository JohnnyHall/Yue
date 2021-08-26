const fetch = require('node-fetch');

exports.run = async (_bot, message, args) => {
  message.delete().catch(O_o => { });
    let [title, contents] = args.join(" ").split("|");
    if (!contents) [title, contents] = ["Achievement Get!", title];
    let rnd = Math.floor((Math.random() * 39) + 1);

    if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
    if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
    if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;

    if (!args.join(" ")) return message.reply("**Diga-me qual deve ser o nome da conquista.**");
    if (title.length > 22 || contents.length > 22) return message.channel.send("Numero maximo de 22 caracteres.");
    const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
    fetch(url).then(r => message.channel.send({files:[{attachment: r.body}]}));
};

exports.help = {
    name: 'achievement',
    aliases: ['achiev']
};
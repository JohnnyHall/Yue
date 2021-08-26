const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = {
  
 run: async(client, message, args) => {
    const text = args.join(" ");
        message.delete().catch(O_o => {});
    if (!text) return message.reply(` por favor digite um texto.`);

    const data = await fetch(
      `https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`
    ).then((res) => res.json());

    const embed = new MessageEmbed()
      .setTitle("Clyde")
      .setImage(data.message)

      

    message.channel.send(embed);
  },
};
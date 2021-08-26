
const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
module.exports = {
  run: async (bot, message, args) => {
    message.delete().catch(O_o => {});
    let subreddits = ["animemes"];
    let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    let img = await api(subreddit, true);
    const Embed = new MessageEmbed()
      .setURL(`https://reddit.com/r/${subreddit}`)
      .setColor("RANDOM")
      .setImage(img);
    message.channel.send(Embed);
  },
};
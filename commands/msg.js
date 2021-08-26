module.exports = {
  run: async (bot, message, args) => {
    if (message.author.id !== '310509939879837696') {
    return message.channel.send(`Você não tem permição para usar esse comando!`)
        }
    message.delete().catch(O_o => {});
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send(
        `Você não mencionou um usuário ou forneceu uma identificação inválida!`
      );
    if (!args.slice(1).join(" "))
      return message.channel.send("Você não especificou sua mensagem");
    user.user
      .send(args.slice(1).join(" "))
      .catch(() => message.channel.send("Esse usuário não pode receber DM"))
      .then(() => message.channel.send(`Mensagem enviada para ${user.user.tag}`));
  },
};
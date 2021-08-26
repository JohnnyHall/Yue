const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete().catch(O_o => { });
          if (message.author.id !== '310509939879837696' && message.author.id !== '393965382475579406') {
          return message.channel.send(`Esquece, você não manda em mim.`)
        }
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "Você é fraco, lhe falta permissão de `Gerenciar Mensagens` para usar esse comando"
    );
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
    return message.reply(
      "Forneça um número de até **99 mensagens** a serem excluídas"
    );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`**${args[0]} mensagens limpas nesse chat!**`).then(msg => msg.delete({timeout: 2500}))
    .catch(error =>
      console.log(`Não foi possível deletar mensagens devido ao erro: ${error}`)
    );
};
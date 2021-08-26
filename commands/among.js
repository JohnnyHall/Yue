const { MessageEmbed } = require('discord.js');

module.exports = {
  run: async (bot, message, args) => {
    message.delete().catch(O_o => {});
       const embed = new MessageEmbed()
      .setTitle(`Among Us`)
      .setImage(`https://i.pinimg.com/originals/ef/ed/91/efed912a0e9ccfce576d3a9a835bec69.gif`)
      .setDescription('**Temos vagas disponíveis no Among <@&759175008894976020>**\nCaso ainda não tenha baixado a nova versão do Among Us clique no botão vermelho abaixo')
      .addField('--------------------------------------------------------------------------------','[🔴](https://drive.google.com/file/d/1pTAO2pdVlPUSR0d4IsqI_5IyiOionFwF/view)')

      

      await message.channel.send(embed)

  }
}

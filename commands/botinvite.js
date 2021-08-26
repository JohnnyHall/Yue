const { MessageEmbed } = require('discord.js');

module.exports = {
  run: async (bot, message, args) => {

       const embed = new MessageEmbed()
      .addField('`Link de convite do discord para os seguintes Bots.`', '[Yue](https://discord.com/oauth2/authorize?client_id=763766687643598871&scope=bot&permissions=2146958847)\n[Angie](https://discord.com/oauth2/authorize?client_id=780124002559066122&scope=bot&permissions=2146958847)\n[Yato](https://discord.com/oauth2/authorize?client_id=763851753748824084&scope=bot&permissions=2146958847)\n[Ricardão](https://discord.com/oauth2/authorize?client_id=526353711929229313&scope=bot&permissions=2146958847)')

      

      await message.channel.send(embed)

  }
}

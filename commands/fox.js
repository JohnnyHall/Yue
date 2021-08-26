const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
  
  run: async (client, message, args) => {
    const url = "https://some-random-api.ml/img/fox";
    const facts = "https://some-random-api.ml/facts/fox"

    let image, response;
    let fact, responses;
    try {
      response = await axios.get(url);
      image = response.data;

      responses = await axios.get(facts)
      fact = responses.data

    } catch (e) {
      return message.channel.send(`Ocorreu um erro. Por favor, tente novamente!`)
    }

    const embed = new MessageEmbed()
      .setTitle(`Imagens e fatos aleatorios sobre raposas`)
      .setDescription(fact.fact)
      .setImage(image.link)

    await message.channel.send(embed)
  }
}
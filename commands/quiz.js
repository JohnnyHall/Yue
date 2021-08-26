  
const { MessageEmbed } = require("discord.js");
let questions = [
  {
    title: "Melhor linguagem de programação",
    options: ["JavaScript/TypeScript", "Python", "Ruby", "Rust"],
    correct: 1,
  },
  {
    title: "Melhor NPM package",
    options: ["int.engine", "ms", "ws", "discord.js"],
    correct: 4,
  },
  {
    title: "Quem é minha ou meu melhor amigo/a?",
    options: ["Pedroww", "Hawckyzin", "Baiana", "Ricardao"],
    correct: 3,
  },
  {
    title: "x+y=?",
    options: ["1", "20", "21", "10"],
    correct: 4,
  },
];
module.exports = {
  run: async (bot, message, args) => {
    let q = questions[Math.floor(Math.random() * questions.length)];
    let i = 0;
    const Embed = new MessageEmbed()
      .setTitle(q.title)
      .setDescription(
        q.options.map((opt) => {
          i++;
          return `${i} - ${opt}\n`;
        })
      )
      .setFooter(
        `Responda a esta mensagem com o número correto da pergunta! Você tem 15 segundos.`
      );
    message.channel.send(Embed);
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 15000, max: 1, errors: ["time"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        return message.channel.send(`Você acertou!`);
      } else {
        return message.channel.send(`Você errou, seu fracassado`);
      }
    } catch (e) {
      return message.channel.send(`Você não respondeu!`);
    }
  },
};
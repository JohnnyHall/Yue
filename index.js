const express = require("express");//Deixa o bot 24 horas ligado
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const assistant = require('./assistant')
const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos
client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token
const fs = require('fs');
const ytdl = require('ytdl-core-discord');
const Youtube = require('simple-youtube-api');
/*-------------------------------------------------------------------------------------*/
client.on("message", message => {
  //isso adiciona comandos a pasta do bot
  if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase()))
    return;
  if (
    message.content.startsWith(`<@!${client.user.id}>`) ||
    message.content.startsWith(`<@${client.user.id}>`)
  )
    return;

  const args = message.content
    .trim()
    .slice(config.prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error("Erro:" + err);
  }
});
/*-------------------------------------------------------------------------------------*/
client.on("ready", () => {
  //Coloca status na Yue
  let activities = [
    `Animes, se precisar de ajuda utilize ${config.prefix}help para obter ajuda`,
    `${client.guilds.cache.size} servidores!`,
    `${client.channels.cache.size} canais!`,
    `${client.users.cache.size} usuários!`
  ],
    i = 0;
  setInterval(
    () =>
      client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }),
    1 * 1 * 60 * 1000
  );
  client.user.setStatus("dnd").catch(console.error);
  console.log("\033[31m Yue esta online.");
});
/*-------------------------------------------------------------------------------------*/
client.on("guildMemberAdd", async (member) => {//boas vindas a quem entra no server

  let guild = await client.guilds.cache.get("412632987285585921");
  let channel = await client.channels.cache.get("412632987721662475");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === ":eyes:");
  if (guild != member.guild) {
   } else {
      let embed = await new Discord.MessageEmbed()
      .setTitle(`Welcome!!`)
      .setImage("https://media1.tenor.com/images/b2b9beacd0411a4348e0c5aa8451f684/tenor.gif?itemid=18235384")
      .setDescription(`**${member.user}** seja bem-vindo/a ao **${guild.name}**!\nAtualmente estamos com **${member.guild.memberCount} membros**`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))

    channel.send(embed);
  }
});
/*-------------------------------------------------------------------------------------*/
client.on("guildMemberRemove", async (member) => {//se despede de quem entra no server

  let guild = await client.guilds.cache.get("412632987285585921");
  let channel = await client.channels.cache.get("412632987721662475");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === ":broken_heart:");
  if (guild != member.guild) {
   } else {
      let embed = await new Discord.MessageEmbed()
      .setTitle(`Tchauzinho!!`)
      .setImage("https://i.gifer.com/sCR.gif")
      .setDescription(`**${member.user.username}**, saiu do servidor! :broken_heart:`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))


    channel.send(embed);
  }
});
/*-------------------------------------------------------------------------------------*/
client.on("message", msg => {
  //yue responde piadas/ações
  
  if (msg.author.bot) return;
});
/*-------------------------------------------------------------------------------------*/
client.on("voiceStateUpdate", function (oldState, newState)
{
    let my_member = newState.member;
    if (my_member.id == '310509939879837696') //checa se o membro que mudou de voicestate é o eu
    {
        if (my_member.voice.channel) //checa se o estou em um canal de voz
        {
            if (newState.mute) //checa se eu nao estou mutado
            {
                newState.setMute(false); //me desmulta
            }
            if (newState.deaf) //checa se eu nao estou escutando
            {
                newState.setDeaf(false); //reativa meu audio
            }
        }
    }
});
/*-------------------------------------------------------------------------------------*/
/*client.on("voiceStateUpdate", function (oldState, newState)
{
    let my_member = newState.member;
    if (my_member.id == '292375499932434432') //checa se o membro que mudou de voicestate é o enzo
    {
        if (my_member.voice.channel) //checa se o enzo esta em um canal de voz
        {
            if (!newState.mute) //checa se o enzo nao esta mutado
            {
                newState.setMute(true); //muta o enzo automaticamente
            }
        }
    }
});*/
/*-------------------------------------------------------------------------------------*/
/*    client.on("voiceStateUpdate", function (oldState, newState)//perseguição
{
    let my_member = newState.member;
   if (my_member.id == '697265793087569921')
    {
        if ((oldState.channel != newState.channel) && (newState.channel != null))
        {   
            let voice_channel = my_member.voice.channel;
      
            var con = voice_channel.join()
                .then(connection => {
                    _connection = connection;
                });          
        }
        if ((oldState.channel != null) && (newState.channel == null) && (_connection != -1))
        {
                _connection.disconnect();
        }
    }

});*/
/*-------------------------------------------------------------------------------------*/
/*client.on("ready", async () => { //timer de enviar memes
const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
    let subreddits = ["meme"];
    let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    let img = await api(subreddit, true);
    const Embed = new MessageEmbed()
      .setURL(`https://reddit.com/r/${subreddit}`)
      .setColor("RANDOM")
      .setImage(img);

  var channel = client.channels.cache.get("736378163201966171"); // channel ID
  setInterval(function() {
    channel.send(Embed);
  },1 * 1 * 10 * 1000);
  channel.send(Embed);
});*/
/*-------------------------------------------------------------------------------------*/
let dialogueUser = '',
	dialogueId = '',
	sessionId = ''
const startDialogue = (message) => {
	if (dialogueId == '') {
		dialogueUser = message.author.username
		dialogueId = message.author.id
		message.channel.startTyping().then(
			assistant
				.newSession()
				.then((res) => {
					sessionId = res.result.session_id
				})
				.then(() => {
					assistant
						.getMessage('oi', sessionId)
						.then((res) => {
							let msg = ''
							try {
								msg = res.result.output.generic[0].text.trim()
							} catch (_) {}
							if (msg.length > 0) message.reply(msg)
						})
						.catch((err) => {
							console.error(err)
						})
				})
				.finally(() => message.channel.stopTyping(true))
		)
	} else {
		message.channel.send(
			`já existe um diálogo em andamento (${dialogueUser})`
		)
	}
}

const checkDialogue = (message) => {
	let msgTxt = message.content.trim()
	if (msgTxt.includes('uwu tchau') || msgTxt == 'tchau') {
		endDialogue(message)
		return
	}

	if (
		message.author.id == dialogueId &&
		!message.content.trim().includes('uwu tchau')
	) {
		message.channel.startTyping().then(
			assistant
				.getMessage(message.content.toString().trim(), sessionId)
				.then((res) => {
					let msg = ''
					try {
						msg = res.result.output.generic[0].text.trim()
					} catch (_) {}
					if (msg.length > 0) message.channel.send(msg)
				})
				.catch((err) => {
					console.error(err)
				})
				.finally(() => message.channel.stopTyping(true))
		)
	}
}

const endDialogue = (message) => {
	if (dialogueId != '') {
		if (message.author.id == dialogueId) {
			message.channel
				.startTyping()
				.then(
					assistant.deleteSession(sessionId).then(() => {
						sessionId = ''
					})
				)
				.finally(() => message.channel.stopTyping(true))
			dialogueUser = ''
			dialogueId = ''
			assistant
				.getMessage('tchau', sessionId)
				.then((res) => {
					let msg = ''
					try {
						msg = res.result.output.generic[0].text.trim()
					} catch (_) {}
					if (msg.length > 0) message.reply(msg)
				})
				.catch((err) => {
					console.error(err)
				})
				.finally(() => message.channel.stopTyping(true))
		}
	} else message.channel.send('nenhum diálogo em andamento')
}
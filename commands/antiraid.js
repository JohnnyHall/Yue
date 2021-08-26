exports.run = async (client, message, args) => {
  const roleA = await message.guild.roles.cache.find(role => role.id === "412632987285585921"); 

  if (
    !message.member.roles.cache.some(r =>
      [
        "412636872360067075",
        "774322148977803307",
        "809137118395498537"
      ].includes(r.id) )) {
    return message.channel.send(`${message.author.username} esse comando é restrito apenas para Paralamentos e ADMs.`);
  } else if (message.content.includes("on")) {
    await roleA.setPermissions(0).catch(console.error);

    await message.channel.send(`O sistema de Antiraid foi ligado por ${message.author.username}`);
  } else if (message.content.includes("off")) {
    await roleA.setPermissions(0).catch(console.error);

    await message.channel.send(
      `O sistema de Antiraid foi desligado por ${message.author.username}`);
  } else {
    return message.channel.send(`${message.author.username} depois do comando antiraid digite **on** | **off**`);
  }
};
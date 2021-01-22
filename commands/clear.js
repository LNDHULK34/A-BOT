const {Discord , MessageEmbed} = require("discord.js")


module.exports = {
  name:"clear",
 aliases:"c",
  execute(message){
    const prefix = message.client.prefix;
    
    if (!message.guild) return;
  if (message.author.bot) return;
  let args = message.content.split(" ");
  let command = args[0].toLowerCase();
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `Sorry, you don't have enough permissions`
      );
    if (!message.guild.member(message.client.user).hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `Sorry, you don't have enough permissions `
      );
    if (!args[1]) {
      message.channel
        .bulkDelete(100)
        .then(m =>
          message.channel
            .send(`\`\`\`\n Clear ${m.size} messages\n\`\`\``)
            .then(p => p.delete({ timeout: 3000 }))
        );
    } else {
      message.delete().then(n => {
        message.channel
          .bulkDelete(args[1])
          .then(m =>
            message.channel
              .send(`\`\`\`\n Clear ${m.size} messages\n\`\`\``)
              .then(p => p.delete({ timeout: 3000 }))
          );
      });
    }
}}
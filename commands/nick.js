const discord = require("discord.js")


module.exports = {
  name:"nick",
  aliases:"n",
  execute(message){
  let prefix = message.client.prefix;
    if(!message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("You don't have a complete role");
    let user = message.mentions.users.first();

    if (!user)
      return message.channel.send(`** ${prefix}nick @mention nickname**`);
    let args = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args)
      message.guild
        .member(user)
        .setNickname("")
        .then(m => {
          message.channel.send(
            " " + user.username + " Has been nicknamed perfectly "
          );
        })
        .catch(error => {
          message.channel.send("Error: **" + error.message + "**");
        });
    message.guild
      .member(user)
      .setNickname(args)
      
        message.channel.send(`Completely changed to ${args}`)

      .catch(error => {
        message.channel.send("Error: **" + error.message + "** ");
      });
  }
  }
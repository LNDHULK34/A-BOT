const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "mute someone",
  catagory: "<:mod:789590144650051604> moderation",
  usage: "mute <@mention> <reason>",
  execute (message, args) {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("sorry you need permission to mute someone");
    }
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to mute");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("\```please mention the members for mute\```");
    }
    if (user.id === message.author.id) {
      return message.channel.send("I can't mute you because you are message author");
    }
    let reason = args.slice(1).join("");

    if (!reason) {
      return message.channel.send(" \``` please give some  reason for mute\``` ");
    }

    const vrole = user.roles.cache

    let muterole = message.guild.roles.cache.find(x => x.name === "muted");

    if (!muterole) {
      message.guild.roles.create({
        data:{
        name:"muted"
      }
      })
      return message.channel.send("\```please create role name with muted \``` ");
    }
    
    user.roles.remove(vrole);
    user.roles.add(muterole);

    message.channel.send(
      `you muted ${message.mentions.users.first().username} for ${reason}`
    );

    user.send(`You get muted in ${message.guild} for ${reason}`
    );
  }
};

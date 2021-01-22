const { discord, MessageEmbed } = require("discord.js")

module.exports = {
  name: "lock",
  aliases: "l",
  execute(message) {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(
        "||ببورە تۆ ئەم ڕۆڵەو پێ نیە"
      );
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    })
    let MrHAMA = new MessageEmbed()
      .setDescription("Lock <a:emoji_16:769616697824247835> ")
      .setAuthor(message.author.username)
      // .setTumbnail(message.author.avatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter(message.client.user.username)
    message.channel.send(MrHAMA)
  }
};

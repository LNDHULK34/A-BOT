const {discord , MessageEmbed} = require("discord.js")

module.exports = {
name:"unlock",
aliases:"",
execute(message){

  if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(
        "**__توانات نیە بیکەیتەوە چونکە ڕۆڵەکەی تۆ ```MANAGE_MESSAGES``پێ نیە**"
      );
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    });
    let MrHAMA = new MessageEmbed()
      .setTitle("UnLock")
      .setAuthor(message.author.username)
      // .setTumbnail(message.author.avatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter(message.client.user.username)
    message.channel.send(MrHAMA)

}}
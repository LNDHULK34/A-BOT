const {discord, MessageEmbed} = require("discord.js")
const moment = require("moment")

module.exports = {
  name:"user",
  aliases:"u",
  execute(message){
let hama = new MessageEmbed()
  .setColor("RANDOM")
  .setTitle("**User Info**")
  .addField("User Name",message.author.username)
  .addField("Created At", `${moment(message.author.createdAt).format("D/M/YYYY h:mm a ")} **\n** \`\`${moment(message.author.createdAt).fromNow()}\`\``,true)
  .addField("Joined At", `${moment(message.member.joinedAt).format("D/M/YYYY h:mm a")} **\n** \`\`${moment(message.member.joinedAt).fromNow()}\`\``,true)
  .addField("Verify", message.client.user.verified)
  .addField("ID",message.author.id)
  .setThumbnail(message.author.avatarURL({dynamic: "true"}))
  //.setAuthor(msg.author.username)
  .setFooter(message.client.user.username)
  .setTimestamp();
  
  
  message.reply(hama)

}}
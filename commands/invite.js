const {discord, MessageEmbed} = require("discord.js")

module.exports = {
  name:"invite",
 aliases:"i",
  execute(message){
let MrHAMA = new MessageEmbed()
      .setTitle("**Cleck Here to Invite Bot**")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=774699380707426304&permissions=8&scope=bot")
      //.setAuthor(message.author.username)
      .setColor("RANDOM")
    //  .setDescription(`[`)
      .setTimestamp()
      .setFooter(message.author.username)
      .setThumbnail(message.author.avatarURL)
     // .setImage("https://cdn.discordapp.com/attachments/762759880325988404/772569952519585802/20201101_233421-1.jpg");
    message.channel.send(MrHAMA);
  
  
  }
}
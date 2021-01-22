const {discord , MessageEmbed} = require("discord.js")

module.exports = {
  name:"about",
 // aliases:"",
  execute(message){

let MrHAMA = new MessageEmbed()
      .setTitle("**Information**")
      .setColor("RANDOM")
      .addField("**Servers**", `${message.client.guilds.cache.size}`,true)
      .addField(
        "**Users**",
        `${message.client.users.cache.size} tb/glitcha usere awana nya zyatra`
      )
      .addField("**Channels**", `${message.client.channels.cache.size}`)
      .addField(
        "**Owner BOT**",
        `Robot°𝖬𝗋𝖧𝖺𝖬𝖺**\n** \`\`\ID:719955045264654407\`\``,true)
      .addField(
        "**Owner Bot**",
        ` Robot°007 \n \`\`\ID:671718458248921128\`\``,true)
      .setAuthor(message.author.username)
      .setThumbnail(message.author.avatarURL({ format: "png", dynamic: "true" }))
      .setTimestamp()
      .setFooter(message.client.user.username);
    message.reply(MrHAMA);

}}

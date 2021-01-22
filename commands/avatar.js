const {discord , MessageEmbed}=require("discord.js")

module.exports = {
  name:"avatar",
  aliases:"a",
  execute(message){
    let prefix = message.client.prefix;
    let command = message.content.toLowerCase().split(" ")[0]
command = command.slice(prefix.length)
    let args = message.content.split(" ")
    let user =
      message.mentions.users.first() ||
      message.author ||
      message.guild.member.cache.get(args[1])
      let hama = new MessageEmbed()
        .setAuthor(user.username, user.avatarURL())
        .setDescription(`**[Avatar Link](${user.avatarURL()})**`)
        .setImage(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
        .setColor("RANDOM")
        return  message.channel.send(hama)
}
      }
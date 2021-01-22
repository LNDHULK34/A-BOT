const { discord, MessageEmbed } = require("discord.js");
module.exports = {
  name: "help",
  aliases: "h",
  execute(message) {
    let prefix = message.client.prefix;
    let hama = new MessageEmbed()
      .setTitle("Helps")
      .setAuthor(message.author.username)
      .setDescription(
        ` 
__**<a:emoji_47:801632577110409217> 𝗣𝘂𝗯𝗹𝗶𝗰 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀**__
☆★☆★☆★☆★☆★
__**<a:emoji_48:801632599080173578> 𝗠𝗼𝗱𝗲𝗿𝗮𝘁𝗶𝗼𝗻 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀**__

[ 𝗜𝗡𝗩𝗜𝗧𝗘 ](https://discord.com/api/oauth2/authorize?client_id=774699380707426304&permissions=2146959191&scope=bot)[ 𝗦𝗨𝗣𝗣𝗢𝗥𝗧 ](https://discord.gg/5fgFRytmCZ)

`
      )
      //.setFooter(message.user.username)
      .setColor("RANDOM")
      .setThumbnail(
        message.author.avatarURL({ format: "png", dynamic: "true" })
      )
      .setTimestamp();

    message.channel.send(hama).then(msg => {
      msg.react("801632577110409217");
      msg.react("801632599080173578");
      let reaction1Filter = (reaction, user) =>
        reaction.emoji.name === "emoji_47" && user.id === message.author.id;
      let reaction2Filter = (reaction, user) =>
        reaction.emoji.name === "emoji_48" && user.id === message.author.id;
      let reaction3Filter = (reaction, user) =>
        reaction.emoji.name === "😊" && user.id === message.author.id;
      let reaction4Filter = (reaction, user) =>
        reaction.emoji.name === "🌀" && user.id === message.author.id;
      let reaction5Filter = (reaction, user) =>
        reaction.emoji.name === "🔒" && user.id === message.author.id;

      let reaction1 = msg.createReactionCollector(reaction1Filter, {
        time: 20000,
        max: 1
      });
      let reaction2 = msg.createReactionCollector(reaction2Filter, {
        time: 18000,
        max: 1 
      });
      let reaction3 = msg.createReactionCollector(reaction3Filter, {
        time: 16000,
        max: 1
      });
      let reaction4 = msg.createReactionCollector(reaction4Filter, {
        time: 14000,
        max: 1 
      });
      let reaction5 = msg.createReactionCollector(reaction5Filter, {
        time: 12000,
        max:1
      });

      reaction1.on("collect", msg => {
        const embed = new MessageEmbed()
          .setTitle("<a:emoji_47:801632577110409217> 𝗣𝘂𝗯𝗹𝗶𝗰 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀")
          .setColor("RANDOM")
          .setAuthor(message.author.username)
          .setThumbnail(message.author.avatarURL({ dynamic: "true" }))
          .setDescription(
            `**=======
${prefix}𝗎𝗌𝖾𝗋 
${prefix}𝗌𝖾𝗋𝗏𝖾𝗋 ${prefix}𝖺𝖻𝗈𝗎𝗍
${prefix}𝗂𝗇𝗏𝗂𝗍𝖾 ${prefix}𝖺𝗏𝖺𝗍𝖺𝗋**
=======
          `
          )
          .setTimestamp();

        message.channel.send(embed);
      });

      reaction2.on("collect", msg => {
        const embed = new MessageEmbed()
          .setTitle("<a:emoji_48:801632599080173578> 𝗠𝗼𝗱𝗲𝗿𝗮𝘁𝗶𝗼𝗻 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀")
          .setColor("RANDOM")
          .setAuthor(message.author.username)
          .setThumbnail(message.author.avatarURL({ dynamic: "true" }))
          .setDescription(
            `**=======
${prefix}𝗅𝗈𝖼𝗄 ${prefix}𝗎𝗇𝗅𝗈𝖼𝗄
${prefix}𝗇𝗂𝖼𝗄 ${prefix}𝖼𝗅𝖾𝖺𝗋
${prefix}𝗆𝗎𝗍𝖾 ${prefix}𝗎𝗇𝗆𝗎𝗍𝖾**
=======

          `
          )
          .setTimestamp();

        message.channel.send(embed);
      });
    });
  }
};

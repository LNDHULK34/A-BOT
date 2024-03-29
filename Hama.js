/**

 * Module Imports

 */

const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const client = new Client({ disableMentions: "everyone" });
const prefix = "a+"
client.login("Nzc0Njk5MzgwNzA3NDI2MzA0.X6blBQ.0xpU8XCyHjUGYTdaIvRC80VMfGg")
client.commands = new Collection();
client.prefix = prefix;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**

 * Client Events

 */

client.on("ready", () => {
  console.log(`${client.user.username} ready!`);
  client.user.setActivity(`${prefix}help `, { type: "LISTENING" });
});

client.on("warn", (info) => console.log(info));
client.on("error", console.error);
/**

 * Import all commands

 */

const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);

}

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
  if (!prefixRegex.test(message.content)) return;
  const [, matchedPrefix] = message.content.match(prefixRegex);
  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
  if (!command) return;
  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());

  }
  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 4000;
  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;8
      return message.reply(
        `**You can't use \`${timeLeft.toFixed(1)}\` this  command again \`${command.name}\` command.**`
        
      );

    }

  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {

    command.execute(message,args,);
  } catch (error) {
    console.error(error);
    message.reply("Error").catch(console.error);

  }

});


client.on("guildCreate" , hama => {
  if(hama.memberCount < 100 ){
    console.log(`  name ( ${hama.name} ) zhmaray memberakan ( ${hama.memberCount}) created by MrHAMA`)//by MrHAMA
    hama.leave();
  }
})



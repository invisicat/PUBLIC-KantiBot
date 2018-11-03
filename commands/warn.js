const Discord = require("discord.js");
const settings = require('../settings.json')
exports.run = async (Bot, message, args) => {
  let author = message.member;
  let oof = author;
  let offender = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!offender) return message.reply("Enter user.")
  let argument = args[0].pop().join(" ");
   if(author.hasPermission("KICK_MEMBERS")) {
        if(offender.hasPermission("ADMINISTRATOR") == true) return message.channel.send("You may not warn this person.").catch(console.error);
        // Kicking code starts HERE
        console.log(author)
        const key = `${offender.id}-${offender.user.username}-${offender.user.discriminator}`;
        if(!Bot.warnings.has(key)) {
          Bot.warnings.set(key, 0)
        }
        Bot.warnings.inc(key)
        offender.send(`${author} has warned you for: **${argument}**. You have **${Bot.warnings.get(key)}** warnings.`)
        console.log(key)
        var channel = Bot.channels.find(c => c.type == "text" && c.name == "mod-log")
        if(channel === "undefined") return console.console.log(colors.red('Encountered Error in guildMemberAdd'));
        channel.send(`${offender} has been warned for, ${argument} by ${author}`);
}else return message.reply("You dont have permissions to execute this command.").catch(console.error);

   }
exports.help = {
  name: "warn",
  category: "Moderation",
  alias: "None",
  permission: "KICK_MEMBERS"
}

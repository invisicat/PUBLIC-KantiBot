const Discord = require("discord.js");
const settings = require('../settings.json')
exports.run = async (Bot, message, args) => {
  let author = message.member;
  let offender = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!offender) return message.reply("Enter user.")
  let argument = args.join(" ");
   if(author.hasPermission("KICK_MEMBERS")) {
        if(offender.hasPermission("ADMINISTRATOR") == true) return message.channel.send("You may not warn this person.").catch(console.error);
        // Kicking code starts HERE

        offender.send(`${author} has warned you for: **${argument}**`)


}else return message.reply("You dont have permissions to execute this command.").catch(console.error);

   }
exports.help = {
  name: "warn",
  category: "Moderation",
  alias: "None"
}

const Discord = require("discord.js");
const settings = require('../settings.json')
exports.run = async (Bot, message, args) => {
  let author = message.member;
  let offender = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!offender) return message.reply("Enter user.")
  let argument = args.join(" ");
   if(author.hasPermission("BAN_MEMBERS")) {
        if(offender.bannable == false) return message.channel.send("You may not ban this person.").catch(console.error);
        // Kicking code starts HERE
        offender.ban(argument).then(m => {
          message.reply(`${m} has been banned!`)
        }).catch(console.error);


}else return message.reply("You dont have permissions to execute this command.").catch(console.error);

   }
exports.help = {
  name: "ban",
  category: "Moderation",
  alias: "None"
}

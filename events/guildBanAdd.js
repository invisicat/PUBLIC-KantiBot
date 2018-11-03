const colors = require('colors');
const Discord = require('discord.js')
module.exports = (Bot, guild, user) => {
  var modlog = Bot.channels.find(c => c.name == "mod-log");
  if(!modlog) return console.log(colors.red("Cannot Find mod-log..."));
//  modlog.send(`${user} has been banned from ${guild}!`).catch(console.error);
let avatar = user.displayAvatarURL
  let embed = new Discord.RichEmbed()
              .setTitle("User Banned")
              .setThumbnail(avatar)
              .addField("User:", `The user, ${user} has been banned from the ${guild}`);
//  modlog.send(`New Channel Created: ${channel}`).catch(console.error);
modlog.send(embed).catch(console.error);
};

const colors = require('colors');
const Discord = require('discord.js')
module.exports = (Bot, oldChannel, newChannel) => {
  var modlog = Bot.channels.find(c => c.name == "mod-log");
  if(!modlog) return console.log(colors.red("Cannot Find mod-log..."));
  modlog.send(`${oldChannel} has been changed to ${newChannel}`).catch(console.error);
  let embed = new Discord.RichEmbed()
              .setTitle("Channel Updated")
              .addField("Old Channel:", oldChannel)
              .addField("New Channel:", newChannel)
//  modlog.send(`New Channel Created: ${channel}`).catch(console.error);
modlog.send(embed).catch(console.error)
}

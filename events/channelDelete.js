const colors = require('colors');
const Discord = require('discord.js')
module.exports = (Bot, channel) => {
  var modlog = Bot.channels.find(c => c.name == "mod-log");
  if(!modlog) {
    return console.log(colors.red("Cannot Find mod-log..."))
  };
//  modlog.send(`**${channel}** has been deleted!`).catch(console.error);
let embed = new Discord.RichEmbed()
            .setTitle("Channel Deleted")
            .addField("Channel:", channel)
//  modlog.send(`New Channel Created: ${channel}`).catch(console.error);
modlog.send(embed).catch(console.error)
}

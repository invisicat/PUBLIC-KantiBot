const colors = require('colors');
module.exports = (Bot, channel) => {
  var modlog = Bot.channels.find(c => c.name == "mod-log");
  if(!modlog) return console.log(colors.red("Cannot Find mod-log..."));
  modlog.send(`**${channel}** has been deleted!`).catch(console.error);
}

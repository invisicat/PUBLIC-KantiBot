const colors = require('colors');
module.exports = (Bot, channel) => {
  var modlog = Bot.channels.find(c => c.name == "mod-log");
  if(!modlog) return console.log(colors.red("Cannot Find mod-log..."));
  modlog.send(`New Channel Created: ${channel}`).catch(console.error);
}

const colors = require('colors');
module.exports = (Bot, oldChannel, newChannel) => {
  var modlog = Bot.channels.find(c => c.name == "mod-log");
  if(!modlog) return console.log(colors.red("Cannot Find mod-log..."));
  modlog.send(`${oldChannel} has been changed to ${newChannel}`).catch(console.error);
}

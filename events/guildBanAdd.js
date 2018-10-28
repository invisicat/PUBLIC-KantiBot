const colors = require('colors');
module.exports = (Bot, guild, user) => {
  var modlog = Bot.channels.find(c => c.name == "mod-log");
  if(!modlog) return console.log(colors.red("Cannot Find mod-log..."));
  modlog.send(`${user} has been banned from ${guild}!`).catch(console.error);
}

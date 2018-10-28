const colors = require('colors');
module.exports = (Bot, member) => {
  var modlog = Bot.channels.find(c => c.name == "mod-log");
  if(!modlog) return console.log(colors.red("Cannot Find mod-log..."));
  modlog.send(`${member} has left the guild!`).catch(console.error);
}

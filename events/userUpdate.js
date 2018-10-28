const colors = require('colors');
module.exports = (Bot, oldUser, newUser) => {
  var modlog = Bot.channels.find(c => c.name == "mod-log");
  if(!modlog) return console.log(colors.red("Cannot Find mod-log..."));
  modlog.send(`${oldUser} has changed their details to ${newUser}`).catch(console.error);
}

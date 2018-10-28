const colors = require('colors');
module.exports = (Bot, role) => {
  var modlog = Bot.channels.find(c => c.name == "mod-log");
  if(!modlog) return console.log(colors.red("Cannot Find mod-log..."));
  modlog.send(`New Role Created!: ${role}`).catch(console.error);
}

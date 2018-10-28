const colors = require('colors');
module.exports = (Bot, guild, user) => {
  var owner = Bot.guilds.find(c => c.name == guild)
  let actual_owner = owner.owner;
  actual_owner.send("Tell the Bot creator to finish this part of the bot!").catch(console.error)
}

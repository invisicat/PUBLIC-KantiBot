const Discord = require("discord.js");
const settings = require('../settings.json')
exports.run = async (Bot, message, args) => {
  let user = message.author.id;
let oof =  JSON.stringify(Bot.xpDB.get(user));
let parser = Bot.xpDB.get(user);
Bot.xpDB.set(user, {
  level: 0,
  xp: 88
});
console.log(oof);
  message.channel.send(oof);
};
exports.help = {
  name: "lipsum",
  category: "Developer",
  description: "Gives Shit",
  alias: "None",
  permission: "ADMINISTRATOR"
};
module.exports.settings = {
    disabled: false
}

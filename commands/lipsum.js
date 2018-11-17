const Discord = require("discord.js");
const settings = require('../settings.json')
exports.run = async (Bot, message, args) => {
const key = `${message.guild.id}-${message.author.id}`;
const oof = args[0]
Bot.xpDB.set(key, {
user: message.author.id,
guild: message.guild.id,
points: 800,
level: 6
});

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

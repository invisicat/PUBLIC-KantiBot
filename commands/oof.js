const Discord = require("discord.js");
const settings = require('../settings.json')
exports.run = async (Bot, message, args) => {
  message.channel.send('oof')
   }
exports.help = {
  name: "pt",
  description: "Permission Tester",
  category: "Developer",
  alias: "None",
  permission: "ADMINISTRATOR"
}
module.exports.settings = {
    disabled: false
}

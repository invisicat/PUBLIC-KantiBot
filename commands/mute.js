const Discord = require("discord.js");
const settings = require('../settings.json')
exports.run = async (Bot, message, args) => {
    message.channel.send('coming soon')

   }
exports.help = {
  name: "mute",
  category: "Moderation",
  alias: "None",
  permission: "MUTE_MEMBERS"
}
module.exports.settings = {
    disabled: false
}

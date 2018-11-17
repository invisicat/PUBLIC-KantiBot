const Discord = require("discord.js");
const settings = require('../settings.json')
exports.run = async (Bot, message, args) => {
  if(!args[0]) return message.reply('Enter a base and the exponent!')
  let base = args[0]
  let exponent = args[1]
  var rand = Math.pow(base, exponent)
  message.channel.send(`${base} to the power of ${exponent} is ${rand}!`)
}
exports.help = {
  name: "Mpower",
  category: "School",
  alias: "expo",
  permission: "None"
}
module.exports.settings = {
    disabled: false
}

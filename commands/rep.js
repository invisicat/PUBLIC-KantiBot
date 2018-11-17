const Discord = require("discord.js");
const settings = require('../settings.json');
const rep = require('../modules/reputation.js')
exports.run = async (Bot, message, args) => {

 }
exports.help = {
  name: "rep",
  description: "Reputates a user",
  category: "Economy",
  alias: "reputation",
  permission: "None",
  useage: "&rep ++ or &rep -- or &rep [user]"
}
module.exports.settings = {
    disabled: false
}

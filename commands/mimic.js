const Discord = require("discord.js")
exports.run = async (Bot, message, args) => {
    const argu = args.join(" ");
    if(!argu) return message.reply('u gae')
    message.channel.send(argu)
  }
  exports.help = {
    name: "me",
    category: "Fun",
    description: "Mimic's the user's action",
    alias: "mimic",
    permission: "Moderator"
  }
  module.exports.settings = {
      disabled: false
  }

const Discord = require("discord.js");
const settings = require('../settings.json')
exports.run = async (Bot, message, args) => {
  if(!args[0]) return message.reply("You have to ask something.")
  randomChoices = ['My sources say no', 'It is decidedly so', 'Very doubtful', 'Better not tell you now', 'Don\'t count on it', 'Most likely', 'It is decidedly so', 'Signs point to yes', 'Better not tell you now', 'Ask Again Later', 'Doubtfully Maybe']
  var rand = randomChoices[Math.floor(Math.random() * randomChoices.length)];
  message.channel.send(rand)
}
exports.help = {
  name: "8ball",
  category: "Fun",
  alias: "8b",
  permission: "None"
}
module.exports.settings = {
    disabled: false
}

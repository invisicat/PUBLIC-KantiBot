const Discord = require("discord.js");
const settings = require('../settings.json')
const modules = require('../modules/minigames.js')
exports.run = async (Bot, message, args) => {
    let game = args[0];
    if(!args[0]) return message.reply("Enter a game!");
    if(game == 'ttt') {
      if(!args[1]) return message.reply("Enter a user to play against or enter: **comp**")
      let user = message.author;
      let user1 = message.mentions.users.first();
      console.log(modules.tic_tac_toe(user, user1, true))
    }
}
exports.help = {
  name: "minigames",
  category: "Fun",
  description: "Play games!",
  alias: "None",
  permission: "None"
}

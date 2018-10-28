const Discord = require("discord.js");
const settings = require('../settings.json')
exports.run = async (Bot, message, args) => {
   if(message.author.id != settings.OwnerID) return;
       if(!args[0]) {
       return  message.channel.send('Enter Event.');
     } else return Bot.emit(args[0], args[1]);
}
exports.help = {
  name: "test",
  alias: "emit"
}

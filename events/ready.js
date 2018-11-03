const colors = require('colors');
const functions = require('../modules/functions.js')
module.exports = function (Bot, message, member) {
  functions.key.administration('yo', 'yoe', 'yon', 'you', 'y', Bot)
  Bot.user.setPresence({
     game: {
       name: '&',
       url: "https://www.twitch.tv/monstercat"
     },
     status: 'STREAMING'
    })
  console.log(colors.cyan(`Hosting: ${Bot.guilds.size} server(s) \nMember Count: ${Bot.users.size} \nChannel Count: ${Bot.channels.size} \nStatus: STREAMING: & \nURL: ttv/monstercat`));
  console.log(colors.green(`Bot is ready to receive commands!`));
};

const colors = require('colors');
module.exports = (Bot, message, member) => {
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

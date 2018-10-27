const Discord = require('discord.js'); // loads Discord
const colors = require('colors'); // Loads colors
const settings = require('./settings.json') // loads settings
const Bot = new Discord.Client(); // Defines Bot as a Discord Client
const prefix = "&"; // Prefix
// let Bot.commands = new Map();
Bot.login(settings.token); // Logs Bot into Discord Servers
// When the Bot is ready do this. V
Bot.on('ready', () => {
    Bot.user.setPresence({
       game: {
         name: '&',
         url: "https://www.twitch.tv/monstercat"
       },
       status: 'STREAMING'
      })
    console.log(colors.cyan(`Hosting: ${Bot.guilds.size} server(s) \nMember Count: ${Bot.users.size} \nChannel Count: ${Bot.channels.size} \nStatus: STREAMING: & \nURL: ttv/monstercat`));
    console.log(colors.green(`Bot is ready to receive commands!`));
})
// Message & Event Handler 

Bot.on('message', message => {
  // Handler
    if(message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  // Handler 2
    console.log(`Message has been sent by ${message.author} with: ${message.content} `)
    if(command === "emit") {
    //  if(message.author != message.member.guild.owner) return;
      if(!args[0]) {
      return  message.channel.send('Enter Event.');
    } else return Bot.emit(args[0], args[1]);
  } else if (command === "userinfo") {
      let id = message.author.id;
      let user = message.author;
      let avatar = user.avatarURL;
      console.log(avatar)
      let presence = JSON.parse(JSON.stringify(user.presence));

      console.log(presence)
      let embed = new Discord.RichEmbed()
      .setThumbnail(avatar)
      .setAuthor("Automated Response", avatar)
      .setTitle(`User Info for: ${message.author.username}`)
      .addField("Basic Info",  `Username: ${message.author.username} \n \n ID: ${id} \n \n Discriminator: #${user.discriminator} \n \n Status: ${presence.status} \n \n Playing: ${presence.game.name} \n \n Joined Discord On: ${user.createdAt} \n`)
      .addField("Guild Specific", "Coming Soon!")
      .addField("XP System", "Coming Soon!")
      .setFooter("Automated Response.");
                    message.channel.send(embed)
  }
})

Bot.on('guildMemberAdd', member => {
    console.log(`${member} has joined the guild!`);
  var channel = Bot.channels.find(c => c.type == "text" && c.name == "oofergang")
  if(channel === "undefined") return console.console.log(colors.red('Encountered Error in guildMemberAdd'));
    channel.send(`${member} has joined the Guild!`);
});

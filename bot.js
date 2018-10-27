const Discord = require('discord.js'); // loads Discord
const colors = require('colors'); // Loads colors
const settings = require('./settings.json') // loads settings
const fs = require('fs')
const enmap = require('Enmap')
const Bot = new Discord.Client(); // Defines Bot as a Discord Client
const prefix = "&"; // Prefix
Bot.login(settings.token); // Logs Bot into Discord Servers
Bot.xpDB = new enmap({
  name: "Experience Database"
});
Bot.xpDB.defer.then(() => {
  console.log(colors.yellow("Experience Database has been loaded into memory!"))
})

// Event Handler
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    Bot.on(eventName, event.bind(null, Bot));
  });
});
Bot.commands = new Map();
Bot.permission = new Map();
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Loaded command: ${commandName} ✓ `);
    console.log(`Command Alias: ${JSON.stringify(props.help)}`)
    Bot.commands.set(commandName, props);
  });
});
Bot.on('message', message => {
  if(message.author.bot) return;
  if(message.guild) {
      let user = message.author.id;
      const key = `${message.guild.id}-${message.author.id}`;
      const curLevel = Math.floor(0.1 * Math.sqrt(Bot.xpDB.get(key, "points")));

    // XP SYSTEM
    // Bot.xpDB.set(user, {
    //   level: 0,
    //   xp: 1
    // })
    // Bot.xpDB is the enmap Database
    if (Bot.xpDB.get(key, "level") < curLevel) {
      message.reply(`You've leveled up to level **${curLevel}**!`);
    }
      console.log(user)
    //  console.log(Bot.xpDB.get(user))

    Bot.xpDB.ensure(key, {
    user: message.author.id,
    guild: message.guild.id,
    points: 0,
    level: 1
  });
  Bot.xpDB.inc(key, "points");
  }
})

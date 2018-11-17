const Discord = require('discord.js'); // loads Discord
const colors = require('colors'); // Loads colors
const settings = require('./settings.json') // loads settings
const fs = require('fs')
const Enmap = require('Enmap')
const Bot = new Discord.Client({
  disabledEvents: [
    'TYPING_START'
  ]
}); // Defines Bot as a Discord Client
const prefix = "&"; // Prefix
const ytdl = require('ytdl-core');
const express = require('express');
const siteInit = require('./dashboard/main.js')
// Initalize Express
siteInit.run('a', 'b', 'c');

// Bot

Bot.login(settings.token); // Logs Bot into Discord Servers
Bot.xpDB = new Enmap({
  name: "Experience Database"
});
Bot.administration = new Enmap({
  name: "Administration"
})
Bot.warnings = new Enmap({
  name: "Warnings Database"
})

Bot.xpDB.defer.then(() => {
  console.log(colors.yellow("Experience Database has been loaded into memory!"));
})
Bot.administration.defer.then(() => {
  console.log(colors.yellow("Administration Database has been loaded into memory!"));
})
Bot.warnings.defer.then(() => {
  console.log(colors.yellow("Warning Database has been loaded into memory!"));
})
Bot.sayHi = 'oof';
// Event Handler
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Load the event file itself
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    Bot.on(eventName, event.bind(null, Bot));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
  console.log(colors.green(`Loaded ${files.length} events!`))
});
// Command Handler
Bot.commands = new Enmap();
Bot.aliases = new Enmap();
Bot.permissions = new Enmap();
Bot.categories = new Enmap();
Bot.categoriesNoDups = new Enmap();
Bot.modules = new Enmap();
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Loaded command: ${commandName} ✓ `);
    Bot.commands.set(props.help.name, props);
    Bot.aliases.set(props.help.alias, props);
    Bot.permissions.set(props.help.name, props.help.permission);
    Bot.categories.set(props.help.name, props.help.category);
  });
  console.log(colors.green(`Loaded ${files.length} commands!`))
  console.log(colors.yellow("Loaded Commands \nLoaded Aliases \nLoaded Permissions \nLoaded Categories \nSuccessfully Loaded all Enmap Databases.. continuing.."))
});
fs.readdir("./modules/", (err, f) => {
  console.log(colors.yellow("Loading Modules.."))
  if(err) return console.log(err);
  f.forEach(f => {
    if(!f.endsWith(".js")) return;
    let moduleProps = require(`./modules/${f}`);
    let moduleName = f.split('.')[0];
    console.log(`Loaded module: ${moduleName}`);
    Bot.modules.set(moduleName, moduleProps) // VERY IMPORTANT... MODULE NAME NEEDS TO BE EXACT.
  })
})

Bot.on('message', message => {
  if(message.author.bot) return;
  if(message.guild) {
      let user = message.author.id;
      const key = `${message.guild.id}-${message.author.id}`;

      if(!Bot.xpDB.has(key)) {
        Bot.xpDB.set(key, {
          user: message.author.id,
          guild: message.guild.id,
          points: 0,
          level: 1
        });
      }
      Bot.curLevel = Math.floor(0.1 * Math.sqrt(Bot.xpDB.get(key, "points")));
      //console.log(`Curlevel: ${Bot.curLevel}- User Level: ${Bot.xpDB.get(key, "level")}`)
    // Bot.xpDB is the Enmap Database
    if (Bot.xpDB.get(key, "level") < Bot.curLevel) {
      message.reply(`You've leveled up to level **${Bot.curLevel}**!`);
      Bot.xpDB.set(key, {
        user: message.author.id,
        guild: message.guild.id,
        points: 0,
        level: Bot.curLevel
      });
    }
//      console.log(user)
    Bot.xpDB.ensure(key, {
    user: message.author.id,
    guild: message.guild.id,
    points: 0,
    level: 1
  });
  Bot.xpDB.inc(key, "points");
  }
})

// Interesting Modules..

Bot.ranHex = function() {
  '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
}

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));

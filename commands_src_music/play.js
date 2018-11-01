const Discord = require('discord.js');
const settings = require('../settings.json');
const Youtube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const funct = require('../events/message');
const Util = require('discord.js')

const youtube = new Youtube(settings.google_api_key);
exports.run = async (Bot, message, args) => {
  var url;
  if(!args[0]) return message.reply("Input URL!")
  if(ytdl.validateURL(args[0]) == true) {
    url = args[0];
  } else message.reply("Enter a valid URL!")
  const streamOptions = { seek: 0, volume: 0.6 };
  const broadcast = Bot.createVoiceBroadcast();
  Bot.m = message.member.voiceChannel;
  Bot.m.join()
    .then(connection => {
      const stream = ytdl(url, {
        filter : 'audioonly',
        quality: 'highestaudio',

      });
      message.channel.send(`Now playing: ${url}`)
      broadcast.playStream(stream);
      const dispatcher = connection.playBroadcast(broadcast);
    })
    .catch(console.error);
}

exports.help = {
  name: "play",
  category: "Music",
  description: "plays music",
  alias: "None"
}

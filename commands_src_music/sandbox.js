  const Discord = require('discord.js');
  const settings = require('../settings.json');
  const Youtube = require('simple-youtube-api');
  const ytdl = require('ytdl-core');
  const funct = require('../events/message');
  const Util = require('discord.js')
  const youtube = new Youtube(settings.google_api_key);
  exports.run = async (Bot, message, args) => {
    const streamOptions = { seek: 0, volume: 0.8 };
    const broadcast = Bot.createVoiceBroadcast();
    Bot.m = message.member.voiceChannel;
    Bot.m.join()
      .then(connection => {
        const stream = ytdl('https://www.youtube.com/watch?v=XAWgeLF9EVQ', {
          filter : 'audioonly'
        });
        broadcast.playStream(stream);
        const dispatcher = connection.playBroadcast(broadcast);
      })
      .catch(console.error);
  }

  exports.help = {
    name: "sandbox",
    category: "Music",
    description: "plays music",
    alias: "None",
    disabled: true
  }

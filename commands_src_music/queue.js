const Discord = require('discord.js');
const settings = require('../settings.json');
const ytdl = require('ytdl-core');
const Util = require('util');
const Youtube = require('simple-youtube-api');
const youtube = new Youtube(settings.google_api_key);
exports.run = async (Bot, message, args) => {
  if (Bot.serverQueue && Bot.serverQueue.playing) {
    Bot.serverQueue.playing = false;
    Bot.serverQueue.connection.dispatcher.pause();
    return message.channel.send('⏸ Paused the music for you!');
  }
  return message.channel.send('There is nothing playing.');
}

exports.help = {
  name: "queue",
  category: "Music",
  description: "DIsplays Queue",
  alias: "None"
}

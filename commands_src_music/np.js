const Discord = require('discord.js');
const settings = require('../settings.json');
const Youtube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const Util = require('util');
const youtube = new Youtube(settings.google_api_key);
exports.run = async (Bot, message, args) => {
  if (!Bot.serverQueue) return message.channel.send('There is nothing playing.');
		return message.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
}

exports.help = {
  name: "volume",
  category: "Music",
  description: "Changes volume",
  alias: "None"
}

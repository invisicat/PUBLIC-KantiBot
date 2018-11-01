const Discord = require('discord.js');
const settings = require('../settings.json');
const Youtube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const Util = require('util');
const youtube = new Youtube(settings.google_api_key);
exports.run = async (Bot, message, args) => {
  if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!Bot.serverQueue) return message.channel.send('There is nothing playing that I could stop for you.');
		Bot.serverQueue.songs = [];
		Bot.serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
}

exports.help = {
  name: "stops",
  category: "Music",
  description: "stops music",
  alias: "None"
}

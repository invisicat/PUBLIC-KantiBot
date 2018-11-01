const Discord = require('discord.js');
const settings = require('../settings.json');
const Youtube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const Util = require('util');
const youtube = new Youtube(settings.google_api_key);
exports.run = async (Bot, message, args) => {
  if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!Bot.serverQueue) return message.channel.send('There is nothing playing.');
		if (!args[1]) return message.channel.send(`The current volume is: **${Bot.serverQueue.volume}**`);
		Bot.serverQueue.volume = args[1];
		Bot.serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return message.channel.send(`I set the volume to: **${args[1]}**`);
}

exports.help = {
  name: "volume",
  category: "Music",
  description: "Changes volume",
  alias: "None"
}

const Discord = require('discord.js')
exports.run = async (Bot, message, args) => {
  // Get a filtered list (for this guild only), and convert to an array while we're at it.
  const filtered = Bot.xpDB.filter( p => p.guild === message.guild.id ).array();
  // Sort it to get the top results... well... at the top. Y'know.
  const sorted = filtered.sort((a, b) => a.points - b.points);
  // Slice it, dice it, get the top 10 of it!
  const top10 = sorted.splice(0, 10);
  // Now shake it and show it! (as a nice embed, too!)
  const embed = new Discord.RichEmbed()
    .setTitle("Leaderboard")
    .setAuthor(Bot.user.username, Bot.user.avatarURL)
    .setDescription("Our top 10 points leaders!")
    .setColor(0x00AE86);
  for(const data of top10) {
    embed.addField(Bot.users.get(data.user).tag, `${data.points} points (level ${data.level})`);
  }
  return message.channel.send({embed});
}
exports.help = {
  name: "leaderboard",
  category: "Economy",
  description: "Displays Top 10 Chatters!",
  alias: "lb"
}

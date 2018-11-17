const Discord = require("discord.js");
const settings = require('../settings.json');
const snekfetch = require('snekfetch')
exports.run = async (Bot, message, args) => {
  let search = args[0]
  if(!args[0]) {
    search = 'Memes'
  }
  try {
    const { body } = await snekfetch
        .get(`https://www.reddit.com/r/${search}.json?sort=top&t=week`)
        .query({ limit: 800 });
    const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
    if (!allowed.length) return message.channel.send('It seems you\'ve found a dead subreddit!, Try again later.');
    const randomnumber = Math.floor(Math.random() * allowed.length)
    const embed = new Discord.RichEmbed()
    .setColor('#36393F')
    .setAuthor(`${search}`, 'https://cdn0.iconfinder.com/data/icons/social-media-2092/100/social-36-512.png')
    .setTitle(allowed[randomnumber].data.title)
    .setDescription("Posted by: " + allowed[randomnumber].data.author)
    .setImage(allowed[randomnumber].data.url)
    .addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
    .setFooter(`Memes provided by r/${search}`)
    message.channel.send(embed)
} catch (err) {
    return console.log(err);
}
   }
exports.help = {
  name: "reddit",
  description: "Gets Reddit Feed from Specified Reddit",
  category: "News",
  alias: "rdit",
  permission: "None"
}
module.exports.settings = {
    disabled: false
}

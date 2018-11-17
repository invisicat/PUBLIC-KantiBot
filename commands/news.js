const Discord = require("discord.js");
const settings = require('../settings.json');
const snekfetch = require('snekfetch')
const NewsAPI = require('newsapi')
const newsapi = new NewsAPI(settings.news_api_key);
exports.run = async (Bot, message, args) => {
  let category = args[0];
  if(!category) {
    category = "technology"
  }
  // To query /v2/top-headlines
  // All options passed to topHeadlines are optional, but you need to include at least one of them
  newsapi.v2.sources({
  category: category,
  language: 'en',
  country: 'us'
}).then(r => {
  const randomnumber = Math.floor(Math.random() * r.sources.length)
  console.log(r.sources[randomnumber]);
//  if(!r.status != "ok") return message.channel.send("Please enter another category!") // if this fails CONTINUE EXECUTION
  let embed = new Discord.RichEmbed()
  .setColor('#36393F')
  .setAuthor(`${category}`, 'https://cdn0.iconfinder.com/data/icons/social-media-2092/100/social-36-512.png')
  .setTitle(r.sources[randomnumber].name)
  .setDescription("Posted by: " + r.sources[randomnumber].description)
//  .setImage(r.[randomnumber].data.url)
  .addField("Other info:", "Category: " + r.sources[randomnumber].category + " / Language: " + r.sources[randomnumber].language)
  .setFooter(`Memes provided by r/${category}`)
  message.channel.send(embed)
  /*
    {
      status: "ok",
      sources: [...]
    }
  */
});
 }
exports.help = {
  name: "news",
  description: "Gets News Feed From PLACEHOLDER site.",
  category: "News",
  alias: "None",
  permission: "None",
  useage: "&news [Category]"
}
module.exports.settings = {
    disabled: true
}

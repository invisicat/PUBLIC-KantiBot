const Discord = require("discord.js");
const settings = require('../settings.json')
exports.run = async (Bot, message, args) => {
  const url = 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png';
  const embed = await new Discord.RichEmbed()
        .setAuthor('Github', url)
        .setThumbnail(url)
        .addField("Github Issue", 'https://github.com/AndyIsCool5463/PUBLIC-KantiBot/issues')
        .addField("Github Suggestion", 'https://github.com/AndyIsCool5463/PUBLIC-KantiBot/issues')
        .setFooter(`Sent by Github 💕`);
   message.channel.send(embed)
}
exports.help = {
  name: "gsuggestion",
  category: "Github",
  alias: "None",
  permission: "None"
}
module.exports.settings = {
    disabled: false
}

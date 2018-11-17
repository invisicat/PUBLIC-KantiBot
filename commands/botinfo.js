const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
exports.run = async (Bot, message, args) => { // eslint-disable-line no-unused-vars
const duration = moment.duration(Bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
      const icon = Bot.user.displayAvatarURL;
      console.log(icon)
      console.log(Discord)
        const embed = new Discord.RichEmbed()
        .setThumbnail(icon)
        .setAuthor(message.guild.id, icon)
        .setTitle(`${message.guild.name}`)
        .setColor('#' + Math.random().toString(16).slice(2, 8).toUpperCase())
        .addField('Memory Useage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
        .addField(`Uptime:`, `${duration}`)
        .addField(`Users:`, `${Bot.users.size.toLocaleString()}`)
        .addField('Servers:', `${Bot.guilds.size.toLocaleString()}`)
        .addField('Channels:', `${Bot.channels.size.toLocaleString()}`)
        .addField('Discord.js:', `$v${version}`)
        .addField('User generated Invite.', message.author)
        .addField("Node.js", `${process.version}`, {code: "asciidoc"})
        .setFooter(`Automated Invite Generator.`);
  //     message.channel.send(`Heres your code! **${i.url}** \n`)
  message.channel.send(embed)

};
exports.help = {
  name: "botinfo",
  category: "Misc",
  description: "Displays Bot information.",
  usage: "botinfo",
  permission: "None",
  alias: "None"
};
module.exports.settings = {
    disabled: false
}

const settings = require('../settings.json');
const Discord = require('discord.js')
exports.run = async (Bot, message, args) => { // eslint-disable-line no-unused-vars
    message.channel.createInvite({
      temporary: false,
      maxAge: 0,
      maxUses: 0,
      unique: false,
      reason: `${message.author} has requested it.`
    }).then(i =>  {
      const icon = message.guild.iconURL;
      console.log(icon)
        const embed = new Discord.RichEmbed()
        .setThumbnail(icon)
        .setAuthor(message.guild.id, icon)
        .setTitle(`${message.guild.name}`)
        .addField(`Invite URL:`, i.url)
        .setColor('#' + Math.random().toString(16).slice(2, 8).toUpperCase())
        .addField('Created At:', i.CreatedAt)
        .addField(`Expires at:`, i.expiresAt)
        .addField(`For Guild:`, i.guild)
        .addField('Max Uses', i.maxUses)
        .addField('Code:', i.code)
        .addField('User generated Invite.', message.author)
        .setFooter(`Automated Invite Generator.`);
  //     message.channel.send(`Heres your code! **${i.url}** \n`)
  message.channel.send(embed)
     })
};
exports.help = {
  name: "invite",
  category: "Misc",
  description: "Generates SERVER Inviet.",
  usage: "&invite OR &inv",
  permission: "None",
  alias: "inv"
};
module.exports.settings = {
    disabled: false
}

const Discord = require('discord.js')
exports.run = async (Bot, message, args) => {
    // Bot.commands.forEach(c => {
    //   let embed = new Discord.RichEmbed()
    //   .addField("Command Name", c.help.name)
    //   .addField("Description", c.help.description)
    //   .addField("Category", c.help.category)
    //   .addField("Alias", c.help.alias);
    //   // console.log(c)
    //   // message.channel.send(`Command Name: ${c.help.name} \n Description: ${c.help.description}`)
    //   message.author.send(embed)
    // })
    let cat = args[0];
    if(!cat) return message.reply(`Enter a category i.e: \`\`${Bot.categoryArr}\`\``)
    if(Bot.categoryArr.includes(cat)) {
      let cChooser = Bot.commands.filter(c => c.help.category == cat).map(c => {
        return c;
      }).forEach(c => {
        let embed = new Discord.RichEmbed()
          .setAuthor(`Category: ${cat}`, message.author.avatarURL)
          .setColor('#' + Math.random().toString(16).slice(2, 8).toUpperCase())
          .addField("Command Name", c.help.name)
          .addField("Description", c.help.description)
          .addField("Alias", c.help.alias)
          .addField("Category", c.help.category)
          .addField("Permission Needed", c.help.permission)
          .addField("Is Disabled?", c.settings.disabled)
          .setFooter("Automatically Generated.")
          message.channel.send(embed)
    //    console.log(`${c.help.name}-${c.help.alias}`)
      })
    } else message.channel.send("Enter a category!")
    //message.reply("Check Yor DMs!")
}

exports.help = {
  name: "help",
  category: "Help",
  description: "Displays all commands",
  alias: "None",
  permission: "None"
}
module.exports.settings = {
    disabled: false
}

const Discord = require('discord.js')
exports.run = async (Bot, message, args) => {
    Bot.commands.forEach(c => {
      let embed = new Discord.RichEmbed()
      .addField("Command Name", c.help.name)
      .addField("Description", c.help.description)
      .addField("Category", c.help.category)
      .addField("Alias", c.help.alias);
      // console.log(c)
      // message.channel.send(`Command Name: ${c.help.name} \n Description: ${c.help.description}`)
      message.author.send(embed)
    })
    message.reply("Check Yor DMs!")
}

exports.help = {
  name: "help",
  category: "Help",
  description: "Displays all commands",
  alias: "None",
  permission: "None"
}

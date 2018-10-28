const Discord = require("discord.js")
exports.run = async (Bot, message, args) => {
      let id = message.author.id;
      let user = message.author;
      let avatar = user.avatarURL;
      let key = `${message.guild.id}-${message.author.id}`
      console.log(avatar)
      let presence = JSON.parse(JSON.stringify(user.presence));

      console.log(presence)
   let embed = await new Discord.RichEmbed()
      .setThumbnail(avatar)
      .setAuthor("Automated Response", avatar)
      .setTitle(`User Info for: ${message.author.username}`)
      .addField("Basic Info",  `Username: ${message.author.username} \n \n ID: ${id} \n \n Discriminator: #${user.discriminator} \n \n Status: ${presence.status} \n \n Playing: PLACEHOLDER} \n \n Joined Discord On: ${user.createdAt} \n`)
      .addField("Guild Specific", "Coming Soon!")
      .addField("XP System", `Rank: PLACEHOLDER \n Level: ${Bot.xpDB.get(key, "level")} \n Points: ${Bot.xpDB.get(key, "points")}`)
      .setFooter("Automated Response.");
  message.channel.send(embed)
  }
  exports.help = {
    name: "userinfo",
    category: "Usefulness",
    description: "Displays User Information",
    alias: "None"
  }

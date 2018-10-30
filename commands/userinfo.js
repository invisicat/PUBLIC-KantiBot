const Discord = require("discord.js")
exports.run = async (Bot, message, args) => {
    let message_author = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author;
    if(message_author.bot == true) return message.reply("Dont try to fucking break the system faggot");
      let id = message_author.id;
      let user = message_author;
      let avatar = user.avatarURL;
      let key = `${message.guild.id}-${message_author.id}`
      console.log(avatar)
      let presence = JSON.parse(JSON.stringify(user.presence));
      var game = presence.game;
        //error checking
        if(!presence.game) {
          game = "Not Playing..."
        }

      console.log(presence)
   let embed = await new Discord.RichEmbed()
      .setThumbnail(avatar)
      .setAuthor("Automated Response", avatar)
      .setTitle(`User Info for: ${message_author.username}`) // I would make the fields seperate lines but im a bit lazy to do that
      .addField("Basic Info",  `Username: ${message_author.username} \n \n ID: ${id} \n \n Discriminator: #${user.discriminator} \n \n Status: ${presence.status} \n \n Playing: ${game} \n \n Joined Discord On: ${user.createdAt} \n`)
      .addField("Guild Specific", "Coming Soon!")
      .addField("XP System", `Rank: PLACEHOLDER \n Level: ${Bot.xpDB.get(key, "level")} \n Points: ${Bot.xpDB.get(key, "points")}`)
      .setFooter("Automated Response.");
  message.channel.send(embed)
  }
  exports.help = {
    name: "userinfo",
    category: "Economy",
    description: "Displays User Information",
    alias: "None"
  }

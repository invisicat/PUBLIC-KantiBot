module.exports = (Bot, member) => {
  console.log(`${member} has joined the guild!`);
  var channel = Bot.channels.find(c => c.type == "text" && c.name == "oofergang")
  if(channel === "undefined") return console.console.log(colors.red('Encountered Error in guildMemberAdd'));
  channel.send(`${member} has joined the Guild!`);
}

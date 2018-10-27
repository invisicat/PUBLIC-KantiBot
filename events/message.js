module.exports = (Bot, message, member) => {
const prefix = "&" ;
  // Ignore all bots
  if (message.author.bot) return;
  if (message.channel === "dm") return;

  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(prefix) !== 0) return;

  // Our standard argument/command name definition.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  // Grab the command data from the Bot.commands Enmap
  const cmd = Bot.commands.get(command);



  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;
  // Run the command
  cmd.run(Bot, message, args);
};

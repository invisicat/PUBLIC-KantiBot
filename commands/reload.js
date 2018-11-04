exports.run = (Bot, message, args) => {
  if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
  const commandName = args[0];
  // Check if the command exists and is valid
  if(!Bot.commands.has(commandName)) {
    return message.reply("Enter a command to reload **derp**...");
  }
  if(commandName === 'admin') return;
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${commandName}.js`)];
  // We also need to delete and reload the command from the Bot.commands Enmap
  Bot.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  Bot.commands.set(commandName, props);
  message.reply(`The command ${commandName} has been reloaded`);
};
exports.help = {
  name: "reload",
  description: "Reloads command",
  category: "Developer",
  alias: "None",
  permission: "ADMINISTRATOR"
}
module.exports.settings = {
    disabled: false
}

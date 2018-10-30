module.exports = (Bot) => {
Bot.loadCommand = (commandName) => {
    try {
      Bot.logger.log(`Loading Command: ${commandName}`);
      const props = require(`../commands/${commandName}`);
      if (props.init) {
        props.init(Bot);
      }
      Bot.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        Bot.aliases.set(alias, props.help.name);
      });
      return false;
    } catch (e) {
      return `Unable to load command ${commandName}: ${e}`;
    }
  };
};

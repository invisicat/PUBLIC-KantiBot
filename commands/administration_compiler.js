const colors = require('colors');
const fs = require('fs')
const functions = require('../modules/functions.js')
exports.run = async (Bot, message, member) => {
  functions.key.administration('yo', 'yoe', 'yon', 'you', 'y', Bot)
  Bot.users.filter(c => c.bot === false).map(c => {
      const key = `${c.id}-${c.name}-${c.discriminator}`; // very unstable key, make another key to be secure... ie they can change their name or discrim and will affect key
    const warnings = Bot.warnings.get(key)
    if(Bot.warnings.has(key)) {
      Bot.warnings.set(key, 0)
    }
    if(!Bot.administration.has(key)) {
      Bot.administration.set(key, {
          user: c.name,
          discriminator: c.discriminator,
          id: c.id,
          isBot: c.bot,
          avatar: c.avatar,
          warningCount: warnings
      })
    }

  })
};
exports.help = {
  name: "admin",
  description: "test",
  category: "Developer",
  alias: "None",
  permission: "ADMINISTRATOR"
}
module.exports.settings = {
    disabled: true
}

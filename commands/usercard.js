const { Canvas } = require("canvas-constructor"); // You can't make images without this.
const imageUrlRegex = /\?size=2048$/g;
const { resolve, join } = require("path"); // This is to get a font file.
const { Attachment } = require("discord.js"); // This is to send the image via discord.
const { get } = require("snekfetch"); // This is to fetch the user avatar and convert it to a buffer.
Canvas.registerFont(resolve(join(__dirname, "../Fonts/Azonix.ttf")), "Azonix");
exports.run = async (Bot, message, args) => {
  // This will check to see if the command was ran in a guild instead of a DM.
if (message.guild) {
  // This creates a "key" for enmaps Key/Value system.
  // We've declared it as a variable as we'll be using it in multiple places.
  const key = `${message.guild.id}-${message.author.id}`;
  // If the points database does not have the message author in the database...
  if (!Bot.xpDB.has(key)) {
    // Create an entry for them...
    Bot.xpDB.set(key, {
      // Using the predefined information below.
      user: message.author.id, guild: message.guild.id, points: 0, level: 1
    });
  }
  // We await both the message.channel.send, and the profile function.
  // Also remember, we wanted to pass the member object, and the points object.
  // Since we're creating a user profile, we should give it a unique file name.
  await message.channel.send(new Attachment(await profile(message.member, Bot.xpDB.get(key)), `profile-${message.author.id}.jpg`));
}
  async function profile(member, score) {
    // We only need the level, and points values, we don't need the user or guild id.
const { level, points } = score;
// We're grabbing the body out of snekfetch's get method, but at the same time we're assigning a variable
// to it, avatar.
// Remember when I mentioned the regex before? Now we get to use it, we want to set the size to 128 pixels,
// instead of 2048 pixels.
const { body: avatar } = await get(member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));
// The reason for the displayName length check, is we don't want the name of the user going outside
// the box we're going to be making later, so we grab all the characters from the 0 index through
// to the 17th index and cut the rest off, then append `...`.
const name = member.displayName.length > 20 ? member.displayName.substring(0, 17) + "..." : member.displayName;
return new Canvas(934, 282)
    .setColor("#2C2F33")// Gray
    .addRect(0, 0, 934, 282)
    .setColor("#7289DA") // Blueple
    .addBeveledRect(10, 10, 910, 260)
    .save()
    .restore()
    .setColor("#2C2F33")
    .addBeveledRect(250, 151, 400, 30, 60)
    .save()
    .restore()
    .setColor("#FFFFFF")
    .setTextAlign("center")
    .setTextFont("24pt Azonix")
    .addText(name, 450, 130)
    .addText(`Level: ${level}`, 450, 230)
    .setTextFont("12pt Azonix")
    .addText(`Experience: ${points}`, 450, 145)
    .restore()
    .setShadowColor("rgba(22, 22, 22, 1)") // This is a nice colour for a shadow.
    .setShadowOffsetY(5) // Drop the shadow by 5 pixels.
    .setShadowBlur(10) // Blur the shadow by 10.
    .save() // We should save the instance again.
    // This circle is 2 pixels smaller in the radius to prevent a pixel border.
    .addCircle(135, 120, 62) // has to be +60 & +64
    // We need to put something here next.
    .addRoundImage(avatar, 75, 56, 128, 128, 64)
    // Now we restore the canvas' previous state.
    .save()
    .restore()
    .toBufferAsync()

}
}

exports.help = {
  name: "usercard",
  category: "Economy",
  description: "Displays XP as a Card",
  alias: "None"
}

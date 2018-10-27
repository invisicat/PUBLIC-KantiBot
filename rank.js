const fs = require("fs");
//var gm = require('gm');
const fse = require('fs-extra');
const Jimp = require('jimp');
//const mergeImg = require('merge-img');
const download = require('image-downloader');
const fsn = require('fs-nextra')
const { Canvas } = require('canvas-constructor'); // canvas constructor (Suggestion from Reddit)
var Trianglify = require('trianglify');
const randomHex = require('random-hex')
module.exports.run = async (Bot,message,args, con) => {
let msgA = message.author; // gets author
let userID = msgA.id; // sets author id as var
let discrim = msgA.discriminator; // author discriminator i.e AndyIsCool5463 #5230
// Timer (Very Useful for this stuff) dunno how to use async and await lol
var delay = ( function() {
var timer = 0;
return function(callback, ms) {
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
};
})();
var ranked;
fs.exists(`./userProf/${userID}/xp.txt`, function(exists) {
  ranked = 0
})
if(ranked === 0) {
  return message.channel.send("ALLAHU AKbAR XD")
}
// user status
/*
Online = #43b581
Do Not Disturb = #f04747
Away =  #faa61a
Offline = #747f8d
*/
// Status System
var status;
if(msgA.presence.status === 'online') {
  status = "#43b581";
} else if(msgA.presence.status === 'dnd') {
  status = "#f04747"
} else if(msgA.presence.status === "idle") {
  status = "#faa61a"
} else if(msgA.presence.status === 'offline') {
  status = "#747f8d"
}
// Generate a pattern and then grab the PNG data uri
var pngURI = Trianglify({
  width: 934,
  height: 282,
  cell_size: Math.random()*200 + 40,
  x_colors: 'random',
  variance: Math.random(),
}).png();

// Strip off the uri part of the data uri, leaving the data
var data = pngURI.substr(pngURI.indexOf('base64') + 7);

// Decode the base64 encoded blob into a buffer
var buffer = new Buffer(data, 'base64');

// Save the buffer to a file
fs.writeFileSync('./cmds/images/picture.png', buffer);
//  let image = 'C:/Users/WILLIAM/Desktop/Node.js Projects/Duncebot2/cmds/images/beach2.png';
// Let user choose their background as arg[0]

// background system
let rng = Math.floor(Math.random() * 10) + 1;
console.log(rng)
var bg;
var randomcolor;
if(!args[0]) {
  bg = './cmds/images/background_g.jpg';
  randomcolor = '#e6e8ed'
} else if(args[0] === "beach") {
  bg = './cmds/images/beach2.jpg';
  randomcolor = randomHex.generate();
} else if(args[0] === "tri") {
  bg = './cmds/images/picture.png';
  randomcolor = randomHex.generate();
} else if(args[0] === "sigignore") {
  bg = './cmds/images/background_g.jpg';
  randomcolor = '#e6e8ed'
}
// File system Sorter
const dirU = './userProf'// User Profile Dir
const dirUser = `./userProf/${userID}` // User Profile "Profile" Folder(s)
const file = `./userProf/${userID}/xp.txt`
const desiredMode = 0o2775
const options = {
mode: 0o2775
}
fse.ensureDir(dirU, err => { //ensures that User Profile Dir is there, if not create the folder
console.log(err) // => null
// dir has now been created, including the directory it is to be placed in
});

fse.ensureDir(dirUser, err => { //checks to see if the user that requested it(profile) has a folder, if not, one is created, and if there is, return;
console.log(err)
});
fse.ensureFile(file, err => {
  console.log(err) // => null
  // file has now been created, including the directory it is to be placed in
})
// With a callback:
  var fileName = bg;
  var imglol = msgA.avatar;
  var imageCaption = msgA.username;
  var loadedImage;
 console.log(msgA.avatar);
    // image combiner
    const optionsD = {
      url: msgA.displayAvatarURL,
      dest: `C:/Users/WILLIAM/Desktop/Node.js Projects/Github/duncebot/userProf/${userID}/avatar.png`                  // Save to /path/to/dest/image.jpg
    }

    download.image(optionsD)
      .then(({ filename, image }) => {
        console.log('File saved to', filename)
      })
      .catch((err) => {
        console.error(err)
      });
// Score Handler
// Scores
var xp;
let target = message.author
con.query(`SELECT * FROM xp WHERE id = '${target.id}'`, (err, rows) => {
  if(err) throw err;
    xp = rows[0].xp
    fs.writeFile(`./userProf/${userID}/xp.txt`, xp, function(err) {})
})
// Math
var scoreNeeded = 8000;
var data = fs.readFileSync(`./userProf/${userID}/xp.txt`);
let readXP = data.toString();
var score = readXP;
// Rank Color System
var rankcolor;
var rank;
if(readXP < 99 && readXP < 100) {
  rank = 0
} else if(readXP > 100 && readXP < 199) {
  rank = 4
} else if(readXP > 200 && readXP < 299) {
  rank = 8
} else if(readXP > 300 && readXP < 399) {
  rank = 12
} else if(readXP > 400 && readXP < 499) {
  rank = 16
} else if(readXP > 500 && readXP < 599) {
  rank = 20
} else if(readXP > 600 && readXP < 699) {
  rank = 24
} else if(readXP > 700 && readXP < 2000) {
  rank = 28
}
ranktext = `Rank: ${rank}`;
if(rank < 10) {
  rankcolor = "#2ded46"
} else if(rank > 11 && rank < 21) {
  rankcolor = "#ed2c2c"
}

console.log(xp)
if(score > scoreNeeded) {
  console.log("error error error Reseting Scores")
  score = 0;
}
let mathoutput = Math.floor(score / scoreNeeded * 400);
let outputScoreboard = Math.abs(mathoutput)
console.log(mathoutput)
//img combiner
      const image = await createCanvas();



      async function createCanvas() {
          const image = await fsn.readFile(bg);
          const image2 = await fsn.readFile(`./userProf/${userID}/avatar.png`)
          let rank = "Rank: 24"
          return new Canvas(934, 282)
              .addImage(image, 0, 0, 934, 282)
              .setTextFont('Impact')
              .setColor(randomcolor) // randomcolor
              .setTextAlign('center') // centers shit
              .setTextSize('32') // sets font size
              .addText(imageCaption, 350, 143) //adds name
              .setColor(rankcolor)
              .addText(ranktext, 834, 40) // adds rank
              .setColor(randomcolor)
              .setTextSize('24') // set text size for Discriminator
              // .addText('Discriminator', 825, 180) // Add discriminator text above box
              // .setColor("#7289DA") // Blurple Discriminator Box
              //.addBeveledRect(725, 190, 200, 80, 15) // User Discriminator Box
              .addText("#" + discrim, 560, 143) // Adds User Discriminator
              .setShadowColor("rgba(22, 22, 22, 1)") // This is a nice colour for a shadow.
              .setShadowOffsetY(5) // Drop the shadow by 5 pixels.
              .setShadowBlur(10) // Blur the sha dow by 10.
              .addCircle(128, 128, 64)
              .setColor(status)
              // .addCircle(185, 175, 16)
              .addCircle(225, 130, 8) // status circle subtract 13 from discrim
              .setColor("#faa61a") // sets background xp color
              .addBeveledRect(240, 165, 400, 30, 30) // background for xp bar
              .setColor("#43b581") // sets actual progress color
              .addBeveledRect(240, 165, outputScoreboard, 30, 30) // max length is 400 & actual xp bar
              .setColor(randomcolor)
              .setTextSize('17')
              .addText("XP: " + score + "/" + scoreNeeded + "xp", 560, 160)
              .addRoundImage(image2, 64, 64, 128, 128, 64) // Avatar
              .toBufferAsync();
      }
// Image Sender via Discord attachment
message.channel.send("Please wait.")
    delay(function(){ // see? delay is so useful!
      message.channel.send({files: [image]});
  }, 3000 ); // end delay
}

module.exports.help = {
    name: "rank"
}

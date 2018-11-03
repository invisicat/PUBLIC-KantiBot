const Discord = require('discord.js')
const fetch = require('snekfetch');
const settings = require('../settings.json')
const regex = /<|]/g;
const regex1 = /<|]/g;
exports.run = async (Bot, message, args) => {

  if(!args[0]) return message.reply("Enter a city.")
  let argument = args.join(" ")
  console.log(argument)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${argument}&units=imperial&appid=${settings.weather_api_key}`

 try {
   fetch.get(url).then(r => {

      weatherhander(r.body.name, r.body.id, r.body.main.temp, r.body.main.humidity, r.body.wind.speed, r.body.sys.country, r.body.weather, r.body.cod)
    })


    async function weatherhander(name, id, temp, humidity, wind_speed, country, main, statusCode) {
      let weather_name = main.map(c => {return c.main})
      let description = main.map(c => {return c.description})
      let icon = main.map(c => {return c.icon});
      console.log(icon[0])
        let embed = await new Discord.RichEmbed()
            .setThumbnail(`http://openweathermap.org/img/w/${icon[0]}.png`)
            .setAuthor("Weather", `http://openweathermap.org/img/w/${icon[0]}.png`)
            .setTitle(`Weather for ${name}, ${country}`)
            .addField("Weather", weather_name[0])
            .addField("Detailed", description)
            .addField("Temperature", temp)
            .addField(`Humidity`, humidity)
            .addField(`Wind Speed`, wind_speed)
            .setFooter(`Automated Response from Openweathermap, WID:${id} from ${name}, ${country} Status Code: ${statusCode}`);
          await  message.channel.send(embed)
    }
 } catch (e) {
   message.channel.send("Error Try another place.")
   console.log(e)
 }
}


exports.help = {
  name: "weather",
  category: "Economy",
  description: "Gives You the weather of the location provided.",
  alias: "forecast",
  permission: "None"
}

const express = require('express');
const fetch = require('node-fetch');
const btoa = require('btoa');
const { catchAsync } = require('../utils');
const settings = require('C:/Users/WILLIAM/Desktop/Node.js Projects/Github/PUBLIC-KantiBot/settings.json') // temporary
const router = express.Router();
const Enmap = require('enmap');
const dashboardDB = new Enmap();
const CLIENT_ID = settings.botID;
const CLIENT_SECRET = settings.botSecret;
const redirect = encodeURIComponent('http://localhost:3000/api/discord/callback');

router.get('/login', (req, res) => {

  res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fdiscord%2Fcallback&response_type=code&scope=guilds%20identify%20email`);
});

router.get('/callback', catchAsync(async (req, res) => {
  if (!req.query.code) throw new Error('NoCodeProvided');
  const code = req.query.code;
  const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
  const response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${creds}`,
      },
    });
  const json = await response.json();
  console.log(json)
  const respone = await fetch('http://discordapp.com/api/users/@me', {
  headers: {
    Authorization: `Bearer ${json.access_token}`,
  }
});
const jsone = await respone.json();
  await res.redirect(`/dashboard/?token=${json.access_token}?expires_in=${json.expires_in}?jsone=${JSON.stringify(jsone)}`);

console.log(jsone) // json response from discord.


dashboarddb.set(creds, json)
dashboarusers.set(creds, jsone)

}));

module.exports = router;

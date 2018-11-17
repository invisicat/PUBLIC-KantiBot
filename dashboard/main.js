const express = require('express')
const app = express()
const port = 3000;
var path = __dirname + '/views/ejs/';
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
exports.run = async (oof) => {
app.use(express.static(path));
// Routes
app.use('/api/discord', require('./api/discord'));

app.get('/', (req, res) => {

  res.render(path + "index.ejs")
  }
)
app.get('/dashboard', urlencodedParser, (req, res) => {
  res.render(path + "dashboard.ejs", {
    data: req.body,
  })
  console.log(req.body)
})
app.use((err, req, res, next) => {
  switch (err.message) {
    case 'NoCodeProvided':
      return res.status(400).send({
        status: 'ERROR',
        error: err.message,
      });
    default:
      return res.status(500).send({
        status: 'ERROR',
        error: err.message,
      });
  }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
};

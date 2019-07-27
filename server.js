const express = require('express');
const app = express();
const moment = require('moment');

const cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));


app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.get('/api/timestamp/', (req, res) => {
  const dateString = new Date();
  const error = {"error" : "Invalid Date" };
  const validDate =  moment(dateString).isValid() ? { unix: moment(dateString).unix(), utc: moment(dateString).utc() } : error;
  res.json(validDate);
})


app.get('/api/timestamp/:date_string', (req, res) => {
  const dateString = req.params.date_string;
  const error = {"error" : "Invalid Date" };
  const validDate = moment(dateString).isValid() ? { unix: moment(dateString).unix(), utc: moment(dateString).utc() } : error;
  res.json(validDate);
})


const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
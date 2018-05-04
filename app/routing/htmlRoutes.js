// display the survey page
var path = require('path')
// get route to /survey
// catch-all route that lead to home

module.exports = function (app) {
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'))
  })

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'))
  })
}

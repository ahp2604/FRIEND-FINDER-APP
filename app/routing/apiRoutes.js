let friends = require('../data/friends')

module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends)
  })

  app.post('/api/friends', function (req, res) {
    let newUser = req.body
    friends.push(newUser)
    console.log(newUser.scores)

    let scoreARR = []

    let friends2 = friends.filter((e, index) => index < friends.length - 1)

    let friends3 = friends2.map((elmt, pos) => {
      let scoreArr2 = elmt.scores.reduce((diff, e, i) => {
        return diff + Math.abs(parseInt(elmt.scores[i]) - parseInt(newUser.scores[i]))
      }, 0)
      scoreARR.push(scoreArr2)
    })
    console.log(scoreARR)


    let pos = 0
    scoreARR.map((e, i) => {

      if (e === Math.min(...scoreARR) || (e = 0)) {
        pos = i
      }
    })
    res.json(friends[pos])
  })
}

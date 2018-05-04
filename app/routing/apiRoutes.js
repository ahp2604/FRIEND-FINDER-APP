let friends = require('../data/friends')

module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends)
  })

  app.post('/api/friends/', function (req, res) {
    friends.push(req.body)
    let newUser = req.body
    // console.log(newUser.scores)
    let scoreARR = []
    let matchingName = " ";
    let matchingPhoto = " ";

    let friends2 = friends.filter((e, index) => index < friends.length - 1);

    let friends3 = friends2.map((elmt, pos) => {
      let scoreArr2 = elmt.scores.reduce((diff, e, i) => {
        return diff + Math.abs(parseInt(elmt.scores[i]) - parseInt(newUser.scores[i]))
      }, 0)
      scoreARR.push(scoreArr2)
    })

    scoreARR.map((e, i) => {
      if (e = Math.min(...scoreARR)) {
        friends[i].name == matchingName;
        friends[i].photo == matchingPhoto;
      }
    })

    console.log(scoreARR);
    res.json({
        name:matchingName,
        photo:matchingPhoto
    })
  })
}

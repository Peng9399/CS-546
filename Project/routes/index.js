let request = require('request');
let querystring = require('querystring');

const constructorMethod = app => {
  let client_id = '0edee0583a08407fa148378bb88dcf68'; // Your client id
  let client_secret = '7807b53ecdff4da3a2325ce589b798d2'; // Your secret
  let redirect_uri = 'http://localhost:3000/callback'; // Your redirect uri

  app.get('/', (req, res) => {
    res.render("authentication/static", {})
  })

  app.get('/login', function(req, res) {
    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: 'user-read-private user-read-email',
        redirect_uri
      }))
  })
  
  app.get('/callback', function(req, res) {
    let code = req.query.code || null
    let authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    }
    request.post(authOptions, function(error, response, body) {
      let access_token = body.access_token

      const options = {                                             //this is your request from the spotify web api the get requests that are happening
        url: 'https://api.spotify.com/v1/browse/categories?country=SE',
        headers: { 'Authorization': 'Bearer ' + access_token },
        json: true
      };

      // use the access token to access the Spotify Web API
      request.get(options, function(error, response, body) {
        console.log(body.categories.items);
      });

      let uri = 'http://localhost:3000/logged'
      res.redirect(uri + '?access_token=' + access_token)

    })
  }) 
  
  app.get("/logged", (req,res) => {
      res.render("authentication/logged", {})
  })



}

module.exports = constructorMethod;
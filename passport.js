const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');
const config = require('./config')
require('dotenv')

passport.serializeUser((user,done)=>{
  done(null,user);
})
passport.deserializeUser((user,done)=>{
  done(null,user)``

})


passport.use('oauth2', new OAuth2Strategy({
  authorizationURL: config.auth_uri,
  tokenURL: config.token_uri,
  clientID: config.client_id,
  clientSecret: config.client_secret,
  callbackURL: 'http://localhost:3100/auth/callback', // Adjust the callback URL
},
(accessToken, refreshToken, profile, done) => {
  // Handle user profile and tokens here

  return done(null, profile)
}




));
module.exports= passport

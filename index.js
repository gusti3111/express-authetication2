const express = require('express');
const passport = require('./passport')
const session  = require('express-session')
const router = express.Router();
const app = express();
// passport.serializeUser((User, done) => {
//   console.log(User)
//   done(null,User); // Misalnya, menggunakan ID sebagai pengenal
// });

// Middleware
app.use(session({
  secret: 'your-secret-key', // Ganti dengan kunci rahasia yang kuat
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
// Rute login
app.get('/login', (req, res) => {
  // Tambahkan logika login di sini, seperti menunjukkan formulir login
});
// Rute callback dari penyedia OAuth2
app.get('/auth/callback', passport.authenticate('oauth2', {
  scope : 'email',
  successRedirect: '/',
  failureRedirect: '/login',
}));

// Rute logout
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});
app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    // Handle akses ke halaman terproteksi di sini
    res.send('Selamat datang!');
  } else {
    res.redirect('/login');
  }
});

// // router.get('/google',
// //   passport.authenticate('google', { scope: ['profile', 'email'] }));

// // router.get('/google/callback',
// //   passport.authenticate('google', { failureRedirect: '/login' }),
// //   (req, res) => {
// //     // Redirect pengguna setelah otentikasi berhasil
// //     res.redirect('/');
// //   }
// );
const port = process.env.PORT || 3100;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
module.exports = router;

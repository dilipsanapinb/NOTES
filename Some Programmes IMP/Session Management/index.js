const session = require('express-session');

const express = require('express');
const app = express();

// app.set('trust proxy', 1)

app.use(session({
    secret: 'keyboard',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}));

app.get('/login', (req, res) => {
    req.session.username = 'Dilip';
    res.send('logged in successfully')
});

app.get("/profile", (req, res) => {
  const username = req.session.username;
  res.send(`Username: ${username}`);
});
app.listen(8000, () => {
    console.log('Server is running on port 8000');
})
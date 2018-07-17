
const express = require("express");
const keys = require("./config/keys");
const mongoose = require("mongoose");
const cookieSession=require('cookie-session')
const passport = require('passport');
require('./models/User');
require("./services/passport");



//mongoose.connect(keys.mongoURI);


mongoose.connect(keys.mongoURI);

//clientId: 
//clientSecret: 

const app = express();
app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
require("./route/authRoutes")(app);
// require('./route/htmlRoutes')(app);
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);


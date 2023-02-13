const express = require('express')
const app = express()
const path = require('path');
const router = require('./router.js')
const db = require("./db.js");
const fs = require('fs')
const logger = require('./logger')
const cookieParser = require('cookie-parser');
const i18n = require("i18n-express");


app.set('view engine', 'pug');
app.set('views','./views');

app.use( (req, res, done) => {
  logger.info(req.originalUrl);
  done();
})

app.use(cookieParser());

app.use(i18n({
  translationsPath: path.join(__dirname, 'i18n'),
  siteLangs: ["en","hu"],
  defaultLang: 'hu',
  textsVarName: 'i18n'
}));

app.use('/', router)

app.use("/css", express.static("node_modules/bootstrap/dist/css"))

app.use("/css", express.static("node_modules/bootstrap-icons/font"))

app.use("/js", express.static("node_modules/bootstrap/dist/js"))

app.use("/js", express.static("node_modules/jquery/dist"))

app.use("/js", express.static("public/javascript"))

app.use((err, req, res, next) => {
  console.error(err.stack)
  logger.error(err.stack)
  res.status(500).render('500')
})

module.exports = app // konzolhoz

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


app.listen(3000)

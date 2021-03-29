const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const serveStatic = require('serve-static');
const session = require('express-session');
const menuRoutes = require('./controllers/menu-routes');
const homeRoutes = require('./controllers/home-routes');
const aboutRoutes = require('./controllers/about-routes');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3005;

const hbs = exphbs.create();

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(menuRoutes);
app.use(homeRoutes);
app.use(aboutRoutes);
app.use(serveStatic(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});
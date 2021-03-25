const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const menuRoutes = require('./controllers/menu-routes');

const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3002;

const hbs = exphbs.create();

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



app.use(menuRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const menuRoutes = require('./menu-routes.js');
const aboutRoutes = require('./about-routes.js');

router.use('/menu', menuRoutes);
router.use('/home', homeRoutes);
router.use('/about', aboutRoutes);
router.use('/api', apiRoutes);


module.exports = router;

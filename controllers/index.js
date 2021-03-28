const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const menuRoutes = require('./menu-routes.js');
router.use('/menu', menuRoutes);
router.use('/home', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

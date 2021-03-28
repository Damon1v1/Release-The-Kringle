const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const menuRoutes = require('./menu-routes');
router.use('/menu', menuRoutes);
router.use('/home', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

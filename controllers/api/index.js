const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const menuRoutes = require('./menu-routes');

// router.use('/users', userRoutes);
router.use('/menu', menuRoutes);

module.exports = router;
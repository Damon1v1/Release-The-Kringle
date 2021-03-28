//homepage or login routes
const router = require('express').Router();

router.get('/home', async (req, res) => {
    res.render('homepage');
});

module.exports = router;
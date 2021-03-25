const router = require('express').Router();
const Product = require('../models/Product');


router.get('/menu', async (req, res) => {
  try {
    const productData = await Product.findAll({
      attributes: [
        'name',
        'description',
        'price'
    ],
  });
    
    const menu = productData.map((menuItem) => 
      menuItem.get({plain: true})
    );

    res.render('menu', { 
      menu,
      layout : 'main' });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
  
  // route to get one product
  router.get('/product/:id', async (req, res) => {
    try{ 
        const productData = await Product.findByPk(req.params.id);
        if(!productData) {
            res.status(404).json({message: 'No products with this id!'});
            return;
        }
        const product = productData.get({ plain: true });
        res.render('product', product);
      } catch (err) {
          res.status(500).json(err);
      };     
  });

module.exports = router;

const router = require("express").Router();

let indexController = require("../controllers/indexController");

router.get('/', indexController.index);
router.get('/info/:id', indexController.info);
//router.get('/qrcode/:item',indexController.qrcode);




module.exports = router;
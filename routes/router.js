const express = require('express');
const router = express.Router();

const main =require('../controller/MainController');

router.get('/', main.index);
router.get('/contact', main.contact);
router.get('/email', main.email);
router.get('/gender', main.gender);
router.get('/address', main.address);




module.exports = router;
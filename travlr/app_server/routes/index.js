var express = require('express');
var router = express.Router();

/* GET HOME PAGE. */
const controller = require('../controllers/main');

router.get('/', controller.index);

module.exports = router;

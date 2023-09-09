const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');

/* GET HOME PAGE. */
router.get('/', ctrlMain.index);
module.exports = router;

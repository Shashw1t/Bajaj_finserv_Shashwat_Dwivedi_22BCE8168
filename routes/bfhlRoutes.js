const express = require('express');
const router = express.Router();
const { bfhlPost } = require('../controllers/bfhlController');

router.post('/bfhl', bfhlPost);

module.exports = router;

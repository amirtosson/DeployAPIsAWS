const express = require('express');
const router = express.Router();
const ctrlLandingpage = require('../controllers/landingpage.controller');

router.get('/getnews', ctrlLandingpage.GetNews);

module.exports = router;
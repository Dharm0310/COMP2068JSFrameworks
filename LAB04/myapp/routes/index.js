const express = require('express');
const router = express.Router();

// Define route for the root path
router.get('/', (req, res) => {
  res.render('index'); // Assuming you want to render the index.ejs file
});

// Define other routes for individual animal pages
router.get('/cat', (req, res) => {
  res.render('cat');
});

router.get('/dog', (req, res) => {
  res.render('dog');
});

router.get('/rabbit', (req, res) => {
  res.render('rabbit');
});

router.get('/bird', (req, res) => {
  res.render('bird');
});

module.exports = router;

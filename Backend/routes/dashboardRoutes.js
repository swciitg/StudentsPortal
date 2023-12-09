const express = require('express');
const router = express.Router();

// Middleware to check if the user is authenticated
const authenticateUser = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login'); // Redirect to login if not authenticated
  }
};

// Dashboard route
router.get('/StudentDashboard/Home', authenticateUser, (req, res) => {
  const user = req.session.user;
  res.render('dashboard', { user });
});

module.exports = router;

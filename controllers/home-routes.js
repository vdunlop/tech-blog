const router = require('express').Router();

// login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
});

// GET all blogs for homepage

// GET one blog


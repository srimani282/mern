const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// @route POST api/users
// @desc Register User
// @access public

router.post('/',
    [
        check('name', 'name is reuired')
            .not()
            .isEmpty(),
        check('email', 'please include a valid email').isEmail(),
        check('password', 'please enter a password of minimum 6 or more').isLength({ min: 6 })

    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.send('User Route');
    });

module.exports = router;
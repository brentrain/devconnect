const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route       POST API/users  
// @desc        Register user 
// @access      public

router.post('/',(req, res) => {
    console.log(req.body);
    res.send('User Route');
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Usercatigories = require('../../model/model/schema/userschema');
router.get('/', (req, res) => {
  Usercatigories.find().lean()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    });
});


module.exports = router;

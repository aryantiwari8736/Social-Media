const express= require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');
router.get('/login',usersController.login);
module.exports = router;
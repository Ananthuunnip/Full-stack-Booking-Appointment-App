const path = require('path');
const express = require('express');
const router = express.Router();
const userController = require('../controller/contl-booking');


router.use(express.static("public"));

router.get('/',userController.getBookingList)

router.get("/users", userController.getUsers);
router.get("/deleteUser/:id", userController.deleteUser);

router.post("/addUser", userController.addUser);



module.exports = router;





const { Router } = require('express');
const { getPrinterStatus, printCanteenTicket } = require('../controllers/tickets');

const router = Router();

router.get('/', getPrinterStatus);

router.post('/', printCanteenTicket);


/*
router.get('/', (req, res) => {
    return res.json('tickets canteen service..');
});
*/

/*
router.post("/", (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
      return res.status(201).json("user created");
    }
    res.status(400).json("user not created");
});
*/


module.exports = router;



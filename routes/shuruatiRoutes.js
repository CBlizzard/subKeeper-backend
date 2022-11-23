const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({
        "title": "SubKeeper",
        "members": {
            "Ayush Sahu": {
                "URN": "300102219027",
                "CRN": "14"
            },
            "Chaitanya Varu": {
                "URN": "300102219029",
                "CRN": "15"
            },
            "Chitransh Chandravanshi": {
                "URN": "300102219031",
                "CRN": "16"
            }
        }
    })
})

module.exports = router;
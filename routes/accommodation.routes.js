const express = require("express");
const router = express.Router();
const Accomodation = require("../models/Accommodation.model");
const Booking = require("../models/Booking.model");

router.get(`/accommodations`, (req, res) => {
  Accommodation.find()
    .then((data) => {})
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Could not find all the accommodations" });
    });
});

module.exports = router;

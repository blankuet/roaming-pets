const express = require("express");
const router = express.Router();
const Accommodation = require("../models/Accommodation.model");
const Booking = require("../models/Booking.model");

// GET /accommodations
router.get(`/accommodations`, (req, res, next) => {
  Accommodation.find()
    .then((data) => res.json(data))
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Could not find all the accommodations" });
    });
});

//GET /accommodations/:id
router.get(`/accommodations/:id`, (req, res, next) => {
  Accommodation.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).json({ message: "Could not find the accommodation" });
    });
});

// POST /accommodations
router.post(`/accommodations`, (req, res, next) => {
  const accommodation = new Accommodation(req.body);
  accommodation
    .save()
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).json({ message: "Could not create the accommodation" });
    });
});

module.exports = router;

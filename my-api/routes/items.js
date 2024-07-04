// routes/items.js

const express = require("express");
const router = express.Router();
const Item = require("../models/Items");

// GET all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// POST an item
router.post("/", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    req.status(201).json(newItem);

  } catch (error) {}
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Volunteer = require("./model"); 
router.post("/registration", async (req, res) => {
  try {
    const volunteer = new Volunteer(req.body);
    await volunteer.save();
    res.status(201).json({ message: "Volunteer registered successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Registration failed", details: err.message });
  }
});

router.get("/admin", async (req, res) => {
  try {
    const volunteers = await Volunteer.find().sort({ createdAt: -1 }); 
    res.status(200).json(volunteers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch volunteers", details: err.message });
  }
});


module.exports = router;

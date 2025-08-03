const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    gender: String,
    dateOfBirth: Date,
    address: String,
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: String,
    educationLevel: {
      type: String,
      required: true,
    },
    instituteName: String,
    fieldOfStudy: String,
    currentlyStudying: Boolean,
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Volunteer", volunteerSchema);

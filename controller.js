const intern = require("./model");
const dotenv = require("dotenv");
const registration = async (req, res) => {
  const {
    fullName,
    email,
    phone,
    gender,
    dateOfBirth,
    address,
    city,
    state,
    pincode,
    educationLevel,
    instituteName,
    fieldOfStudy,
    currentlyStudying,
  } = req.body;
  try {
    console.log("registration portal opened");
    const internEmail = await owner.findOne({ email });
    const internPhone = await owner.findOne({ phone });
    if (internEmail) {
      return res.status(400).json({ error: "Email already registered" });
    }
    if (internPhone) {
      return res
        .status(400)
        .json({ error: "Mobile Number already registered" });
    }
    const newIntern = new intern({
      fullName,
      email,
      phone,
      gender,
      dateOfBirth,
      address,
      city,
      state,
      pincode,
      educationLevel,
      instituteName,
      fieldOfStudy,
      currentlyStudying,
    });
    await newIntern.save();
    res
      .status(201)
      .json({ message: "intern registered successfully!", intern: newIntern });
    console.log("internr registered", newIntern);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getallApplicants=async (req,res)=>{
    try {
        const applicants=await intern.find.sort({ createdAt: -1 });
        res.status(200).json(applicants);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch applicants", details: error.message });
    }
}

module.exports={
    registration
}
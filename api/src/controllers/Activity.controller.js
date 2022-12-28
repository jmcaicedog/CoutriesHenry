const { Activity } = require("../db");
const setActivity = async (req, res) => {
  const { name, difficulty, duration, season, countryIds } = req.body;
  try {
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    newActivity.addCountry(countryIds);
    res.status(201).send("Activity created successfully...");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = setActivity;

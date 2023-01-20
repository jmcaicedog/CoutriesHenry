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

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll();
    if (!activities) {
      throw "No activities have been created yet...";
    }
    res.status(200).json(activities);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteActivity = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRowsCount = await Activity.destroy({ where: { id } });
    if (deletedRowsCount) {
      res.status(200).json({ message: "The activity was deleted" });
    } else {
      res.status(404).json({ message: "Activity not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Activity delete error...");
  }
};
module.exports = { setActivity, getActivities, deleteActivity };

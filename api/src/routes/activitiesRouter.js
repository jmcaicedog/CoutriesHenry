const { Router } = require("express");
const activitiesRouter = Router();

const {
  setActivity,
  getActivities,
  deleteActivity,
} = require("../controllers/Activity.controller");

activitiesRouter.post("/", setActivity);
activitiesRouter.get("/", getActivities);
activitiesRouter.delete("/:id", deleteActivity);

module.exports = activitiesRouter;

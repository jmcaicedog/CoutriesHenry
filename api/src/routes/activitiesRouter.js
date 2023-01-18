const { Router } = require("express");
const activitiesRouter = Router();

const {
  setActivity,
  getActivities,
} = require("../controllers/Activity.controller");

activitiesRouter.post("/", setActivity);
activitiesRouter.get("/", getActivities);

module.exports = activitiesRouter;

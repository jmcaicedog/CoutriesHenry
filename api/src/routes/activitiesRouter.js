const { Router } = require("express");
const activitiesRouter = Router();
const { Activity } = require("../db");
const setActivity = require("../controllers/Activity.controller");

activitiesRouter.post("/", setActivity);

module.exports = activitiesRouter;

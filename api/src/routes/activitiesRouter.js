const { Router } = require("express");
const activitiesRouter = Router();

const setActivity = require("../controllers/Activity.controller");

activitiesRouter.post("/", setActivity);

module.exports = activitiesRouter;

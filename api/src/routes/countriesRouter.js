const { Router } = require("express");
const countriesRouter = Router();

const {
  getAllCountries,
  getCountryByName,
} = require("../controllers/Country.controller");

countriesRouter.get("/", getAllCountries);
countriesRouter.get("/:id", getCountryByName);

module.exports = countriesRouter;

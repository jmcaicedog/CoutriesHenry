const { Country } = require("../db");

const getCountryByName = async (req, res) => {
  const name = req.params;
  try {
    const country = await Country.findOne({ where: name });
    if (!country) {
      throw "Country not found...";
    }
    res.status(200).json(country);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllCountries = async (req, res) => {
  try {
    const countries = await Country.findAll();
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllCountries,
  getCountryByName,
};

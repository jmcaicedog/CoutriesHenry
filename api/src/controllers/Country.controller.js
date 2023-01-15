const { Country, Activity } = require("../db");
const Sequelize = require("sequelize");

const getCountryByName = async (req, res) => {
  const id = req.params;
  try {
    const country = await Country.findOne({ where: id, include: Activity });
    if (!country) {
      throw "Country not found...";
    }
    res.status(200).json(country);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllCountries = async (req, res) => {
  const { name } = req.query;
  if (!name) {
    try {
      const countries = await Country.findAll({
        include: [
          {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: {
              attributes: {
                exclude: ["createdAt", "updatedAt", "CountryId", "ActivityId"],
              },
            },
          },
        ],
      });
      res.status(200).json(countries);
    } catch (error) {
      res.status(400).send(error.message);
    }
  } else {
    try {
      const countries = await Country.findAll({
        where: {
          name: Sequelize.where(
            Sequelize.fn("LOWER", Sequelize.col("name")),
            "LIKE",
            "%" + name.toLowerCase() + "%"
          ),
        },
      });
      console.log(countries.length);
      if (countries.length === 0) {
        throw "Country not found...";
      }
      res.status(200).json(countries);
    } catch (error) {
      res.status(400).json("Country not found...");
    }
  }
};

module.exports = {
  getAllCountries,
  getCountryByName,
};

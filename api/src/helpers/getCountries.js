const axios = require("axios");
const { Country } = require("../db");

const getCountries = async () => {
  try {
    const countries = await Country.findAll();

    if (!countries.length) {
      const apiData = await axios.get("https://restcountries.com/v3/all");
      const apiCountries = apiData.data.map((country) => {
        return {
          id: country.cca3,
          name: country.name.common,
          flag: country.flags[0],
          continent: country.continents[0],
          capital: country.capital, //Object.values(country.capital)[0];
          subregion: country.subregion,
          area: country.area,
          population: country.population,
        };
      });
      await Country.bulkCreate(apiCountries);
    }
  } catch (error) {
    return console.log(error.message);
  }
};

module.exports = getCountries;

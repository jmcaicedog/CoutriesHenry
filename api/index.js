require("dotenv").config();
const PORT = process.env.PORT || 3001;
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const getCountries = require("./src/helpers/getCountries");

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`%s listening at port ${PORT}`);
    getCountries();
  });
});

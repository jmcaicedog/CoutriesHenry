const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const getCountries = require("./src/helpers/getCountries");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log("%s listening at 3001");
    getCountries();
  });
});

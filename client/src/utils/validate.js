const validate = (form) => {
  let errors = {};
  let difficulty = Number(form.difficulty);
  let duration = Number(form.duration);

  if (!form.name) errors.name = "You must enter a name for the activity";
  else if (/[^A-Za-z0-9 ]+/g.test(form.name))
    errors.name = "The name cannot contain special characters or accents";

  if (!form.difficulty)
    errors.difficulty = "You must enter a difficulty from 1 to 5";
  else if (difficulty <= 0 || difficulty > 5)
    errors.difficulty = "Difficulty must be from 1 to 5";

  if (!form.duration) errors.duration = "You must enter duration in hours";
  else if (duration <= 0 || duration > 24)
    errors.duration = "Duration must be from 1 to 24 hours";

  if (!form.season || form.season === "Select a season")
    errors.season = "You must select a season";

  if (!form.countryIds || form.countryIds.length === 0)
    errors.countryIds = "You must select at least one country";

  return errors;
};
export default validate;

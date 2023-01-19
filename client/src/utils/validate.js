const validate = (form) => {
  let errors = {};
  let dif = Number(form.difficulty);
  let dur = Number(form.duration);

  if (!form.name) errors.name = "Campo Necesario";
  else if (/[^A-Za-z0-9 ]+/g.test(form.name))
    errors.name = "Nombre no puede tener caracteres especiales o tildes";

  if (!form.difficulty) errors.difficulty = "Campo Necesario";
  else if (dif <= 0 || dif > 5) errors.difficulty = "Debe ser entre 1 y 5";

  if (!form.duration) errors.duration = "Campo Necesario";
  else if (dur <= 0 || dur > 24) errors.duration = "Debe ser entre 1 y 24";

  if (!form.season || form.season === "vacio")
    errors.season = "Campo Necesario";

  if (!form.countryIds || form.countryIds.length === 0)
    errors.countryIds = "Campo Necesario";

  return errors;
};
export default validate;

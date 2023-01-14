const validate = (form, errors, setErrors) => {
  if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/.test(form.email)) {
    setErrors({ ...errors, email: "" });
  } else {
    setErrors({ ...errors, email: "Please set a valid email" });
  }
};
export default validate;

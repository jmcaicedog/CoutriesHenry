import axios from "axios";

export const getCountries = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/countries");
    dispatch({ type: "GET_COUNTRIES", payload: response });
  };
};

export const getCountry = (countryId) => {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/countries/${countryId}`
    );
    dispatch({ type: "GET_COUNTRY", payload: response.data });
  };
};

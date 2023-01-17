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

export const searchCountries = (searchTerm) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/countries/?name=${searchTerm}`
      );
      dispatch({ type: "SEARCH_COUNTRIES", payload: response });
    } catch (error) {
      console.log("No hay un país que coincida con la búsqueda...");
      alert("Not country found... Please try another world!");
      dispatch({ type: "SEARCH_COUNTRIES", payload: { data: [] } });
    }
  };
};

export const setCurrent = (current) => {
  return async function (dispatch) {
    await dispatch({ type: "SET_CURRENT", payload: current });
  };
};

export const setPage = (page) => {
  return async function (dispatch) {
    await dispatch({ type: "SET_PAGE", payload: page });
  };
};

export const setCountriesPerPage = (countriesPerPage) => {
  return async function (dispatch) {
    await dispatch({
      type: "SET_COUNTRIES_PER_PAGE",
      payload: countriesPerPage,
    });
  };
};

export const filterByContinent = (continent) => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/countries");
    dispatch({
      type: "FILTER_BY_CONTINENT",
      payload: { continent: continent, response: response },
    });
  };
};

export const sortByName = (sortDirection) => {
  return async function (dispatch) {
    dispatch({
      type: "SORT_BY_NAME",
      payload: sortDirection,
    });
  };
};

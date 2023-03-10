import axios from "axios";

export const getCountries = () => {
  return async function (dispatch) {
    const response = await axios.get("/countries");
    dispatch({ type: "GET_COUNTRIES", payload: response });
  };
};

export const getActivities = () => {
  return async function (dispatch) {
    const response = await axios.get("/activities/");
    dispatch({ type: "GET_ACTIVITIES", payload: response });
  };
};

export const getCountry = (countryId) => {
  return async function (dispatch) {
    const response = await axios.get(`/countries/${countryId}`);
    dispatch({ type: "GET_COUNTRY", payload: response.data });
  };
};

export const searchCountries = (searchTerm) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/countries/?name=${searchTerm}`);
      dispatch({ type: "SEARCH_COUNTRIES", payload: response });
    } catch (error) {
      console.log("Not country found... Please try another world!");
      alert("Not country found... Please try another world!");
      dispatch({ type: "SEARCH_COUNTRIES", payload: { data: [] } });
    }
  };
};

export const postActivity = (form) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("/activities", form);
      dispatch({ type: "POST_ACTIVITY", payload: response });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "POST_ACTIVITY", payload: { data: [] } });
    }
  };
};

export const deleteActivity = (id) => {
  return async function (dispatch) {
    try {
      const json = await axios.delete(`/activities/${id}`);
      alert("Activity deleted succesfully");
      return dispatch({ type: "DELETE_ACTIVITY", payload: json });
    } catch (error) {
      console.log(error.response.data);
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

export const setDetailChange = () => {
  return async function (dispatch) {
    await dispatch({ type: "SET_DETAIL_CHANGE" });
  };
};

export const setActivitiesChange = () => {
  return async function (dispatch) {
    await dispatch({ type: "SET_ACTIVITIES_CHANGE" });
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
    dispatch({
      type: "FILTER_BY_CONTINENT",
      payload: continent,
    });
  };
};

export const filterByActivity = (activity) => {
  return async function (dispatch) {
    dispatch({
      type: "FILTER_BY_ACTIVITY",
      payload: activity,
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

export const sortByPopulation = (sortDirection) => {
  return async function (dispatch) {
    dispatch({
      type: "SORT_BY_POPULATION",
      payload: sortDirection,
    });
  };
};

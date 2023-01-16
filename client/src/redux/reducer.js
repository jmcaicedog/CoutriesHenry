const initialState = {
  countries: [],
  country: {},
  activities: [],
  searchTerm: "",
  current: 1,
  page: 1,
  countriesPerPage: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
    case "SEARCH_COUNTRIES":
      return { ...state, countries: action.payload.data };

    case "GET_COUNTRY":
      return {
        ...state,
        country: action.payload,
        activities: action.payload.Activities,
      };

    case "SET_CURRENT":
      return {
        ...state,
        current: action.payload,
      };

    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };

    case "SET_COUNTRIES_PER_PAGE":
      return {
        ...state,
        countriesPerPage: action.payload,
      };

    case "FILTER_BY_CONTINENT":
      const { continent, response } = action.payload;
      return {
        ...state,
        countries:
          continent === "All"
            ? response.data
            : response.data.filter(
                (element) => element.continent === continent
              ),
      };

    default:
      return { ...state };
  }
};

export default reducer;

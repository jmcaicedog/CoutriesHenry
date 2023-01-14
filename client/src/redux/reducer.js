const initialState = {
  countries: [],
  country: {},
  activities: [],
  searchTerm: "",
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

    default:
      return { ...state };
  }
};

export default reducer;

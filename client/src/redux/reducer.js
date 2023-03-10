const initialState = {
  countries: [],
  countriesUnmodified: [],
  country: {},
  activities: [],
  allActivities: [],
  searchTerm: "",
  current: 1,
  page: 1,
  countriesPerPage: 10,
  orderedsend: false,
  detailchanged: false,
  activitieschanged: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload.data,
        countriesUnmodified: action.payload.data,
      };

    case "SEARCH_COUNTRIES":
      return {
        ...state,
        countries: action.payload.data,
      };

    case "GET_ACTIVITIES":
      return {
        ...state,
        allActivities: action.payload.data,
      };

    case "GET_COUNTRY":
      return {
        ...state,
        country: action.payload,
        activities: action.payload.Activities,
      };

    case "POST_ACTIVITY":
      return {
        ...state,
        orderedsend: !state.orderedsend,
      };

    case "DELETE_ACTIVITY":
      return {
        ...state,
        orderedsend: !state.orderedsend,
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

    case "SET_DETAIL_CHANGE":
      return {
        ...state,
        detailchanged: !state.detailchanged,
      };

    case "SET_ACTIVITIES_CHANGE":
      return {
        ...state,
        activitieschanged: !state.activitieschanged,
      };

    case "SET_COUNTRIES_PER_PAGE":
      return {
        ...state,
        countriesPerPage: action.payload,
      };

    case "SORT_BY_NAME":
      let ordered =
        action.payload === "A to Z"
          ? state.countries.sort((a, b) => {
              if (a.name.localeCompare(b.name) > 0) return 1;
              if (a.name.localeCompare(b.name) < 0) return -1;
              return 0;
            })
          : state.countries.sort((a, b) => {
              if (a.name.localeCompare(b.name) < 0) return 1;
              if (a.name.localeCompare(b.name) > 0) return -1;
              return 0;
            });
      return {
        ...state,
        countries: ordered,
        orderedsend: !state.orderedsend,
      };

    case "SORT_BY_POPULATION":
      let orderedpop =
        action.payload === "ASC"
          ? state.countries.sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              }
              if (b.population > a.population) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.population > b.population) {
                return -1;
              }
              if (b.population > a.population) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: orderedpop,
        orderedsend: !state.orderedsend,
      };

    case "FILTER_BY_CONTINENT":
      const continent = action.payload;
      return {
        ...state,
        countries:
          continent === "All"
            ? state.countriesUnmodified
            : state.countriesUnmodified.filter(
                (element) => element.continent === continent
              ),
        orderedsend: !state.orderedsend,
      };

    case "FILTER_BY_ACTIVITY":
      const allCountries = state.countriesUnmodified;

      const countriesWithActivities = allCountries.filter((country) => {
        return country.Activities.length > 0;
      });

      let array = [];

      for (let i = 0; i < countriesWithActivities.length; i++) {
        for (let j = 0; j < countriesWithActivities[i].Activities.length; j++) {
          if (
            countriesWithActivities[i].Activities[j].name === action.payload
          ) {
            array.push(countriesWithActivities[i]);
          }
        }
      }

      const filtered =
        action.payload === "All" ? countriesWithActivities : array;
      return {
        ...state,
        countries: filtered,
        orderedsend: !state.orderedsend,
      };

    default:
      return { ...state };
  }
};

export default reducer;

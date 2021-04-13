const initialState = {
  country: [],
  region: [
    {
      name: "Asia",
      api: "https://restcountries.eu/rest/v2/region/asia",
    },
    {
      name: "Eurape",
      api: "https://restcountries.eu/rest/v2/region/europe",
    },
  ],
};

const country_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchCountry": {
      return {
        ...state,
        country: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default country_reducer;

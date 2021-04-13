import React from "react";
import axios from "axios";
import thunkMiddleware from "redux-thunk";
import { useSelector, useDispatch } from "react-redux";

export const fetCountry = (index) => async (dispatch, store) => {
  console.log("this is running ");
  const newstore = store();
  const region = newstore.country_reducer.region;
  console.log(region[index].api);
  let response = await axios.get(region[index].api);
  console.log(response.data);
  dispatch({ type: "fetchCountry", payload: response.data });
};

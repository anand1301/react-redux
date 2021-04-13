import React, { useState, useEffect } from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActionArea,
  CssBaseline,
  Container,
  Grid,
  Toolbar,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetCountry } from "../store/middleware/thunk";

export function Home() {
  const [selectedCountry, setcountry] = useState();
  const country = useSelector((state) => state.country_reducer.country);
  const dispatch = useDispatch();
  const regions = useSelector((state) => state.country_reducer.region);

  const onregionselect = async (api) => {
    let response = await axios.get(api);
    console.log(response);
    setcountry(response.data);
  };
  useEffect(() => {
    dispatch(fetCountry(0));
  }, []);
  console.log(selectedCountry);
  const findname = () => {
    let index = country.findIndex((countries) => {
      return countries.name == selectedCountry;
    });
    if (index == -1) {
      return "";
    } else {
      return (
        <div
          className="output flex-row"
          style={{ border: "solid #eee 2px", margin: "20px" }}
        >
          <div>
            <img src={country[index].flag} width={"200px"} />
          </div>
          <div>
            <div className="flex-row">
              <p style={{ fontWeight: "500" }}>country Name: </p>
              <p> {country[index].name}</p>
            </div>
            <div className="flex-row">
              <p style={{ fontWeight: "500" }}>Capital: </p>
              <p> {country[index].capital}</p>
            </div>
            <div className="flex-row">
              <p style={{ fontWeight: "500" }}>Currency: </p>
              <p> {country[index].currencies[0].name}</p>
            </div>
            <div className="flex-row">
              <p style={{ fontWeight: "500" }}>Population: </p>
              <p> {country[index].population}</p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h5">Devam - Know the world</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              Color="textPrimary"
              gutterBottom
            >
              World
            </Typography>
            <Typography
              variant="h5"
              align="center"
              Color="textSecondary"
              Paragraph
            >
              First select the region , upon selecting region, countries will
              bee appear, select perticular country and you will come across the
              detail
            </Typography>
          </Container>
        </div>

        <div className="flex-row selection-container">
          <div align="center" maxWidth="xlg">
            <FormControl>
              <InputLabel> Region</InputLabel>
              <Select
                defaultValue="0"
                onChange={(e) => {
                  dispatch(fetCountry(e.target.value));
                }}
              >
                {regions.map((item, i) => {
                  return <option value={i}>{item.name}</option>;
                })}
              </Select>
            </FormControl>
          </div>
          <div style={{ margin: "20px" }}></div>
          <div align="center" maxWidth="xlg">
            <FormControl>
              <InputLabel> Country</InputLabel>
              <Select
                value={selectedCountry}
                onChange={(e) => {
                  setcountry(e.target.value);
                }}
              >
                {country.map((item, i) => {
                  return <option value={item.name}>{item.name}</option>;
                })}
              </Select>
            </FormControl>
          </div>
        </div>
        <div>{findname()}</div>
      </main>
    </>
  );
}

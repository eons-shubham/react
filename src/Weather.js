import React from "react";
import Header from "./Header";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
import raw from "./raw.json";

export default function Weather() {
  const [city, setCity] = useState("chennai");
  const [resData, setResData] = useState(raw);
  const [timerId, setTimerId] = useState(null);
  const [someErr, setSomeErr] = useState(0);
  //0 means no error 1 means some error
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const containerStyle = {
    marginTop: "20px",
    marginBottom: "20px",
  };

  const performAPI = async () => {
    try {
      setSomeErr(0);
      const URL = `https://api.weatherapi.com/v1/current.json?key=3ed69500b5944503a9271959233011&q=${city}&aqi=no`;
      const response = await axios.get(URL);
      setResData(response.data);
    } catch (err) {
      console.log(err);
      setSomeErr(1);
    }
  };

  useEffect(() => {
    clearTimeout(timerId);

    const timer = setTimeout(() => {
      performAPI();
    }, 800);

    setTimerId(timer);
  }, [city]);

  return (
    <>
      <Header />
      <Container style={containerStyle} maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Enter Location"
              variant="outlined"
              value={city}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          {someErr === 1 ? (
            <Grid item xs={12}>
              <Typography variant="h5" style={{ color: "red" }} align="center">
                No matching location found.
              </Typography>
            </Grid>
          ) : (
            <>
              {" "}
              <Grid item xs={12}>
                <Typography
                  style={containerStyle}
                  align="center"
                  variant="h4"
                  gutterBottom
                >
                  {resData.location.name}, {resData.location.region}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <img
                    src={resData.current.condition.icon}
                    alt="Weather Icon"
                  />
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="body1" align="left">
                        Temperature
                      </Typography>
                      <Typography variant="body1" align="right">
                        {resData.current.temp_c}°C / {resData.current.temp_f}°F
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="body1" align="left">
                        Condition
                      </Typography>
                      <Typography variant="body1" align="right">
                        {resData.current.condition.text}
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="body1" align="left">
                        Wind Speed
                      </Typography>
                      <Typography variant="body1" align="right">
                        {resData.current.wind_kph} km/h
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="body1" align="left">
                        Humidity
                      </Typography>
                      <Typography variant="body1" align="right">
                        {resData.current.humidity} %
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="body1" align="left">
                        Cloud Coverage
                      </Typography>
                      <Typography variant="body1" align="right">
                        {resData.current.cloud} %
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="body1" align="left">
                        Last Updated
                      </Typography>
                      <Typography variant="body1" align="right">
                        {resData.current.last_updated}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </>
  );
}

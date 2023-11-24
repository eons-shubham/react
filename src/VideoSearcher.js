import Box from "@mui/material/Box";
import { TextField, Grid } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";

export default function VideoSearcher() {
  const [searchText, setSearchText] = useState("");
  const [videos, setVideos] = useState([]);
  const [debounceTimer, setDebounceTimer] = useState(0);

  const APICall = async (searchText) => {
    let URL = `https://content-xflix-backend.azurewebsites.net/v1/videos`;
    if (searchText !== "") {
      URL = `${URL}?title=${searchText}`;
    }
    const response = await axios.get(URL);
    setVideos(response.data.videos);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (debounceTimer !== 0) {
      clearTimeout(debounceTimer);
    }
    let timerId = setTimeout(() => {
      APICall(searchText);
    }, 800);

    setDebounceTimer(timerId);
  }, [searchText]);

  return (
    <>
      <TextField
        type="text"
        placeholder="Search for video"
        size="small"
        value={searchText}
        onChange={handleChange}
      />

      <Grid container spacing={2}>
        {videos.map((ele) => {
          return (
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <VideoCard
                genre={ele.genre}
                title={ele.title}
                releaseDate={ele.releaseDate}
                previewImage={ele.previewImage}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

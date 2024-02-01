import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar } from ".";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from ".";
import { specialPlaylistVideosCategories } from "../utils/constants";

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("Coding Courses");
  const [videos, setVideos] = useState(null);

  const fetchVideos = () => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }

  const fetchPlayListVideos = (playlistId) => {
    fetchFromAPI(`playlistItems?part=snippet&playlistId=${playlistId}`)
    .then((data) => setVideos(data.items))
  }

  useEffect(() => {
    setVideos(null);
    if (Object.keys(specialPlaylistVideosCategories).includes(selectedCategory)) {
      fetchPlayListVideos(specialPlaylistVideosCategories[selectedCategory]);
    } else {
      fetchVideos();
    }
    }, [selectedCategory]);

  const onPlaylistTitleClick = () => {
    if (Object.keys(specialPlaylistVideosCategories).includes(selectedCategory)) {
      window.location.href = `/course/${specialPlaylistVideosCategories[selectedCategory]}`;
    }
  }

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2024 CodeTube
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography onClick={onPlaylistTitleClick} variant="h4" fontWeight="bold" mb={2} sx={{ color: "white", cursor: "pointer" }}>
            {selectedCategory} <span style={{ color: "#FC1503" }}>Videos</span>
          </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, CardContent } from "@mui/material";

import { Videos } from ".";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const PlaylistDetail = () => {
  const [playlistDetail, setPlaylistDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`playlists?part=snippet&id=${id}`);

      setPlaylistDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`playlistItems?part=snippet&playlistId=${id}`)

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        <Typography variant="h3">
            {playlistDetail?.snippet?.title}{' '}
        </Typography>
        <Typography variant="h6">
            {playlistDetail?.snippet?.channelTitle}{' '}
        </Typography>
        {/* <Typography variant="h6" sx={{ color: 'gray' }}>
            {playlistDetail?.snippet?.description}{' '}
        </Typography> */}
      </CardContent>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default PlaylistDetail;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, CardContent } from "@mui/material";

import { Videos } from ".";
import youtubeApi from "../utils/fetchFromAPI";

const PlaylistDetail = () => {
  const [playlistDetail, setPlaylistDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {

        youtubeApi.get(`playlists?part=snippet&id=${id}`).then((response) => {
            console.log(response.data)
            setPlaylistDetail(response.data?.items[0]);
        });


        youtubeApi.get(`playlistItems?part=snippet&playlistId=${id}`).then((response) => {
            setVideos(response.data.items);
        });

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
import React from "react";
import { Stack } from "@mui/material";
import { VideoCard, Loader } from ".";


const Videos = ({ videos, direction }) => {
  if(videos?.length === 0) return <Loader />;
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos?.map((item, idx) => {
        if (item.id.kind === "youtube#video") {
          return <VideoCard key={idx} videoId={item.id.videoId} snippet={item.snippet} />;
        } else if (item.kind === "youtube#playlistItem") {
          return <VideoCard key={idx} videoId={item.snippet.resourceId.videoId} snippet={item.snippet} />;
        }
        return null
      })}
    </Stack>
  );
}

export default Videos;

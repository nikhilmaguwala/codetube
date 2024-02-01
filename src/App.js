import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from '@mui/material'
import { Feed, Navbar, VideoDetail, SearchFeed, PlaylistDetail } from './components'

const App = () => {
    return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: '#000' }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/video/:id" element={<VideoDetail />} />
                    <Route path="/course/:id" element={<PlaylistDetail />} />
                    <Route path="/search/:searchTerm" element={<SearchFeed />} />
                </Routes>
            </Box>
        </BrowserRouter>
    );
}

export default App;
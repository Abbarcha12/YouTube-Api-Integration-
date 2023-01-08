import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Feed, Navbar, SearchFeed, VideoDetailPage, ChannelDetailPage } from "./components/index"
import { Box } from "@mui/material"
const App = () => {
 return (
  <BrowserRouter>
   <Box >
    <Navbar />
    <Routes>
     <Route path="/" exact element={<Feed />} />
     <Route path="/video/:id" element={<VideoDetailPage />} />
     <Route path="/channel/:id" element={<ChannelDetailPage />} />
     <Route path="/search/:searchTerm" element={<SearchFeed />} />
    </Routes>
   </Box>
  </BrowserRouter>
 )
}

export default App
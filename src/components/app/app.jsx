import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Channel, Main, Navbar, Search, Videodetail } from '..'


const app = () => {
  return (
  <Box>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/channel/:id" element={<Channel/>}/>
      <Route path="/video/:id" element={<Videodetail/>}/>
      <Route path="/search/:id" element={<Search/>}/>
    </Routes>
  </Box>
  )
}

export default app
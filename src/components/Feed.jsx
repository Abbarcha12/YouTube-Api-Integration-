import React, { useState, useEffect } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { SideBar, Videos } from './index'
import { fetchFromAPI } from '../utils/FetchData'
const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('New')
  const [video, setVideo] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideo(data.items)
    })
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          SelectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#fff', display: { sm: 'none' } }}
        >
          Copyright 2023 Barcha_o3
        </Typography>
      </Box>cdf
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCategory} <span style={{ color: '#2265d9' }}>Videos</span>
        </Typography>
        <Videos video={video} />
      </Box>
    </Stack>
  )
}

export default Feed

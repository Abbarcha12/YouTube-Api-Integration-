import { useState, useEffect } from 'react'
import { Typography, Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/FetchData'
import { Videos } from './index'

const SearchFeed = () => {
  const [Videoww, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    )
  }, [searchTerm])
  return (
    <Box p={2} minHeight='95vh'>
      <Typography
        variant='h4'
        fontWeight={900}
        color='white'
        mb={3}
        ml={{ sm: '100px' }}
      >
        Search Results for{' '}
        <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
      </Typography>
      <Box display='flex'>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos video={Videoww} />
      </Box>
    </Box>
  )
}

export default SearchFeed

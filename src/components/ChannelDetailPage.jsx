import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ChannelCard, Videos } from './index'
import { Box } from '@mui/material'
import { fetchFromAPI } from '../utils/FetchData'
const ChannelDetailPage = () => {
  const [channel, setChannel] = useState([])
  const [videos, setVideo] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?parts=snippet&id=${id}`).then(
        (item) => {
          setChannel(item?.items[0])
        }
      )
      const Video = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      )
      setVideo(Video?.items)
      console.log(Video?.items)
    }
    fetchResults()
  }, [id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div
          style={{
            height: '300px',
            background: '#000000',
          }}
        >
          <ChannelCard channel={channel} />
        </div>
      </Box>
      <Box p={2} display='flex'>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos  video={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetailPage

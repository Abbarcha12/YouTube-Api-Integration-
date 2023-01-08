import React from 'react'
import { Stack, Box } from '@mui/material'
import { ChannelCard, VideoCard } from './index'
const Videos = ({ video, direction }) => {
  return (
    <Stack direction={direction || "row"} flexWrap='wrap' justifyContent='start' gap={2}>
      {video.map((item, idx) => {
        return (
          <Box key={idx}>
            {item.id.videoId && <VideoCard data={item} />}
            {item.id.channelId && <ChannelCard channel={item} />}
          </Box>
        )
      })}
    </Stack>
  )
}

export default Videos

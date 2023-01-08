import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { categories } from '../utils/constant'

const SideBar = ({ SelectedCategory, setselectedCategory }) => {
  return (
    <Stack
      direction='row'
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category) => {
        return (
          <button
            className='category-btn'
            style={{
              background: category.name === SelectedCategory && '#2265d9',
              color: 'white',
            }}
            key={category.name}
            onClick={() => setselectedCategory(category.name)}
          >
            <span
              style={{
                color: category.name === SelectedCategory ? 'white' : '#2265d9',
                marginRight: '15px',
              }}
            >
              {category.icon}
            </span>
            <span>{category.name}</span>
          </button>
        )
      })}
    </Stack>
  )
}

export default SideBar

import React, { useState } from 'react'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState()
  const Navigation = useNavigate()
  const HandleSubmit = (e) => {
    e.preventDefault()
    console.log(searchTerm)
    if (searchTerm) {
      Navigation(`/search/${searchTerm}`)
      setsearchTerm('')
    }
  }
  return (
    <Paper
      component='form'
      onSubmit={HandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        placeholder='Search .....'
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
      />
      <IconButton>
        <Search type='submit' sx={{ color: 'red' }} />
      </IconButton>
    </Paper>
  )
}

export default SearchBar

import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar } from '@mui/material'
import useStyles from './styles'
const Header = () => {
  const classes = useStyles()
  return (

    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>

      </Toolbar>

    </AppBar>
  )
}

export default Header
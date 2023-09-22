import React from 'react'
import { Button } from '@mui/material'

const Buttons = ({name,className}) => {
  return (
    <>
  
      <Button type="button" variant="contained"  className={className}>
        {name}
        </Button>
      
    </>
  )
}

export default Buttons

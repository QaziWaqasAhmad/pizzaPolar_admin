import React from 'react'
import { Button } from '@mui/material'

const Buttons = ({name,className, onClick}) => {
  return (
    <>
  
      <Button type="button" variant="contained"  className={className} onClick={onClick} draggable="false">
        {name}
        </Button>
      
    </>
  )
}

export default Buttons

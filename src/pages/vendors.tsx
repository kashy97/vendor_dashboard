import { Button, Typography } from '@mui/material'
import React from 'react'

const Vendors = () => {
  return (
    <div>
        <Typography variant="h4">Vendors</Typography>
        <br />
        <Button href="/vendors/add" variant="contained" color="info">Add Vendor</Button>
    </div>
  )
}

export default Vendors
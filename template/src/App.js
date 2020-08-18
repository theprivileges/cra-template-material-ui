import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Copyright from './Copyright'

export default function App () {
  return (
    <Container maxWidth='sm'>
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom>
            Create React App using Material-UI
        </Typography>
        <Copyright />
      </Box>
    </Container>
  )
}

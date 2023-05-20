import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom';

function Base({title,describe,children}) {
    const history = useHistory();
  return (
    <div>
        <nav className='nav'>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" color="secondary">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
               
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        DASHBOARD
                    </Typography>
                    <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </nav>
    
        <div className='main-content'> 

            <div className='left-content'>
                <div className='btn'>
                <Button color="primary" variant="contained"
                onClick={()=>history.push('/addbook')}
                >add new book</Button>

                <Button color="secondary" variant="contained"
                onClick={()=>history.push('/')}
                >book list</Button>
                </div>
            </div>
            <div className='right-content'>
              <h3 className='b-title'>{title}</h3>
               <p className='b-title'>{describe}</p>
              <div>{children}</div>
            </div>

        </div>
    </div>
  )
}

export default Base
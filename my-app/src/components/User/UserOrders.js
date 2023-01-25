import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function UserDetails(props) {

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>
        {' '}
        <React.Fragment>
          <CardContent>
            <Typography variant='h5' component='div'>
              My Orders
            </Typography>
            {props.orders.map((item, i) => (
              <Grid
                key={i}
                item
                xs={24}
                md={6}
                justifyContent='center'
                sx={{ alignContent: 'center', padding: '20px' }}
              >
                {' '}
                <Card
                  sx={{
                    bgcolor: 'white',
                    maxWidth: 300,
                  }}
                >
                  <Typography sx={{ fontSize: 18 }}>
                    Date of purchase: {item.date}
                  </Typography>
                  <Typography sx={{ fontSize: 18 }}>
                    Total Price: ${item.totalPrice}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}

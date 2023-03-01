import { useState, useRef } from 'react';
// @mui
import { Container } from '@mui/material';
// components
import Page from '../components/Page';
// sections

export default function NotFound() {

    return (
      <Page title="Contact me" >
          <Container
          sx={{  display: 'flex',
          	justifyContent: 'center',
          	alignItems: 'center',
          	height: '100vh',
            flexDirection: 'column',
            gap: '10px'
      		}}
          >
              <h1>God'sgift Uko</h1>
              <a style="color: #656665;" href="mailto:godsgiftuko@gmail.com?subject=Mail from Peddle React App">godsgiftuko@gmail.com</a>
          </Container>
    	</Page>
    );
}

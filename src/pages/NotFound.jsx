import { useState, useRef } from 'react';
// @mui
import { Container } from '@mui/material';
// components
import Page from '../components/Page';
// sections

export default function NotFound() {

    return (
      <Page title="Not Found" >
          <Container
          sx={{  display: 'flex',
          	justifyContent: 'center',
          	alignItems: 'center',
          	height: '100vh'
      		}}
          >
              <h1>Not Found</h1>
          </Container>
    	</Page>
    );
}

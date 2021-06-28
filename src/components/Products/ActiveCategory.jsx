import React from 'react';
import { Container ,Typography} from '@material-ui/core'

function ActiveCat(props){
return (

    <div >
          <Container maxWidth="sm">
            <Typography key={5000} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {props.categories.active?.toUpperCase()}
            </Typography>
            <Typography key={5649841} variant="h5" align="center" color="textSecondary" paragraph>
              {props.categories.active?props.categories.categories.filter(item => item.name === props.categories.active)[0].description:"EMPTY"}            </Typography>
          </Container>
        </div>
    );
}

export default ActiveCat;
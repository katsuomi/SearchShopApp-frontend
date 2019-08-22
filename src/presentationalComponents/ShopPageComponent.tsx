import React from 'react';
import Grid from '@material-ui/core/Grid';

import HeaderComponent from './HeaderComponent';
import ShopProfile from "../components/ShopProfile"

const ShopPageComponent = (props: {match: {params: {id: string }}}) => (
  <React.Fragment>
    <Grid container>
      <Grid item xs={12}><HeaderComponent /></Grid>
      <Grid item xs={12} sm={3}></Grid>
      <Grid item xs={12} sm={6}>
        <ShopProfile id={props.match.params.id} />
      </Grid>
      <Grid item xs={12} sm={3}></Grid>
    </Grid>
  </React.Fragment>
);


export default ShopPageComponent;
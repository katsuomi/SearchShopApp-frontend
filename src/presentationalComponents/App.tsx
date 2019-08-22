import React from 'react';
import Grid from '@material-ui/core/Grid';
import SeacrchShopComponent from "./SearchShopComponent"
import SearchResults from '../components/SearchResults';
import PaginationButtons from '../components/PaginationButtons';
import HeaderComponent from './HeaderComponent';

const App = () => (
  <Grid container>
    <Grid item xs={12}><HeaderComponent /></Grid>
    <Grid item xs={12} sm={3} md={3}></Grid>
    <Grid item xs={12} sm={6} md={6}>
      <SeacrchShopComponent />
      <SearchResults />
      <PaginationButtons />
    </Grid>
    <Grid item xs={12} sm={3} md={3}></Grid>
  </Grid>
)


export default App;

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

const HeaderComponent = () => (
  <React.Fragment>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Link to="/">
          <Typography variant="h6" color="inherit">
            <i className="material-icons logo-style white">
              home
            </i>
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  </React.Fragment>
);


export default HeaderComponent;
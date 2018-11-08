import React, { Fragment, Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <div className="App">
          <Grid container spacing={16} justify="center">
            <Grid item xs={12}>
              TEST
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default App;

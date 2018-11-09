import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import ContentCard from './components/contentCard';
import './App.css';
import LA from './static/la.jpg';
import vegas from './static/vegas.jpg';

const appStyles = theme => ({
  root: {
    // padding: '0px 200px'
  }
})

const content = [
  {
    title: 'Los Angeles',
    subheader: 'Dec 23, 2018',
    cardImage: LA,
    contentSummary: 'First day in LA',
    contentList: [
      {
        time: '10:00',
        content: 'Arrival at airport',
        actionLink: null,
        actionText: null
      },
      {
        time: '10:30',
        content: 'Pickup car',
        actionLink: null,
        actionText: null
      },
      {
        time: '12:00',
        content: 'Check in at Hotel',
        actionLink: 'https://goo.gl/maps/u6hRvMAXr132',
        actionText: 'MAP'
      }
    ]
  },
  {
    title: 'LA - Las Vegas',
    subheader: 'Dec 24, 2018',
    cardImage: vegas,
    contentSummary: 'From the City of Angels to the Sin City',
    contentList: [
      {
        time: '7:30',
        content: 'Get up',
        actionLink: null,
        actionText: null
      }
    ]
  }
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <CssBaseline />
        <div className="App">
          <Grid className={classes.root} container spacing={16} justify="center">
            {
              content.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <ContentCard
                    title={item.title}
                    subheader={item.subheader}
                    cardImage={item.cardImage}
                    contentSummary={item.contentSummary}
                    contentList={item.contentList}
                  />
                </Grid> 
              ))
            }
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(appStyles)(App);

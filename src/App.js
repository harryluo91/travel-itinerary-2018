import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import ContentCard from './components/contentCard';
import './App.css';
import LA from './static/la.jpg';
import vegas from './static/vegas.jpg';
import antelope from './static/antelope.jpg';
import grandCanyon from './static/grand-canyon.jpg';
import deathValley from './static/death-valley.jpg';
import driving from './static/driving.jpg';
import yosemite from './static/yosemite.jpg';
import shopping from './static/shopping.jpg'
import universalStudios from './static/universal-studios.jpg';
import flying from './static/flying.jpg';

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
  },
  {
    title: 'Las Vegas - Antelope Canyon - Grand Canyon',
    subheader: 'Dec 25, 2018',
    cardImage: antelope,
    contentSummary: 'The Canyons',
    contentList: [
      {
        time: '6:30',
        content: 'Get up',
        actionLink: null,
        actionText: null
      }
    ]
  },
  {
    title: 'Grand Canyon - Las Vegas',
    subheader: 'Dec 26, 2018',
    cardImage: grandCanyon,
    contentSummary: 'Grand Canyon Hiking',
    contentList: [
      {
        time: 'Depends',
        content: 'Get up and watch sunrise',
        actionLink: null,
        actionText: null
      }
    ]
  },
  {
    title: 'Las Vegas - Death Valley',
    subheader: 'Dec 27, 2018',
    cardImage: deathValley,
    contentSummary: 'Death Valley Exploration',
    contentList: [
      {
        time: '7:30',
        content: 'Get up',
        actionLink: null,
        actionText: null
      }
    ]
  },
  {
    title: 'Death Valley - Yosemite',
    subheader: 'Dec 28, 2018',
    cardImage: driving,
    contentSummary: 'Driving...',
    contentList: [
      {
        time: '7:30',
        content: 'Get up',
        actionLink: null,
        actionText: null
      }
    ]
  },
  {
    title: 'Yosemite - LA',
    subheader: 'Dec 29, 2018',
    cardImage: yosemite,
    contentSummary: 'More driving...',
    contentList: [
      {
        time: '7:30',
        content: 'Get up',
        actionLink: null,
        actionText: null
      }
    ]
  },
  {
    title: 'LA',
    subheader: 'Dec 30, 2018',
    cardImage: shopping,
    contentSummary: 'Do stuff see stuff and buy stuff in LA',
    contentList: [
      {
        time: '7:30',
        content: 'Get up',
        actionLink: null,
        actionText: null
      }
    ]
  },
  {
    title: 'Universal Studio',
    subheader: 'Dec 31, 2018',
    cardImage: universalStudios,
    contentSummary: 'Universal Studio',
    contentList: [
      {
        time: '7:30',
        content: 'Get up',
        actionLink: null,
        actionText: null
      }
    ]
  },
  {
    title: 'LA',
    subheader: 'Jan 1, 2019',
    cardImage: flying,
    contentSummary: 'Flying',
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

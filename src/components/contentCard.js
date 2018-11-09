import React, { Component } from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  card: {
    maxWidth: 400,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    justifyContent: 'center'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  label: {
    justifyContent: 'flex-end'
  }
})


class ContentCard extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const {
      classes,
      title,
      subheader,
      cardImage,
      contentSummary,
      contentList
    } = this.props;
    return (
      <div className="content-card">
        <Card className={classes.card}>
          <CardHeader
            title={title}
            subheader={subheader}
          />
          <CardMedia
            className={classes.media}
            image={cardImage}
          />
          <CardContent>
            <Typography component="p">
              {contentSummary}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <List>
                {
                  contentList.map((item, index) => (
                    <React.Fragment key={index}>
                      <ListItem>
                        <ListItemIcon>
                          {
                            item.time ? (
                              <span>{item.time}</span>
                            ) : <span></span>
                          }
                        </ListItemIcon>
                        <ListItemText>
                          <Typography variant="caption" style={{overflowWrap: 'break-word'}}>{item.content}</Typography>
                        </ListItemText>
                        {
                          item.actionLink ? (
                            <ListItemSecondaryAction>
                              <Button className={classes.label} size="small" color="primary">
                                <a rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none'}} href={item.actionLink}>
                                  {item.actionText}
                                </a>
                              </Button>
                            </ListItemSecondaryAction>
                          ) : null
                        }
                      </ListItem>
                      <Divider inset component="li" light/>
                    </React.Fragment>
                  ))
                }
              </List>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(ContentCard);

import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core'
import ActiveCat from './ActiveCategory';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflowy: 'scroll',
    backgroundColor: theme.palette.background.paper,
    height:"fit-content"
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    width:"95vw",
  },
}));

function TitlebarGridList(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ActiveCat categories={props.categories} />
      <Container className={classes.cardGrid} >
        <Grid container className={classes.root}>
          {props.children}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

// 1- add the state to this component props
const mapStateToProps = state => ({
  categories: state.categoriesReducer,
});
export default connect(mapStateToProps)(TitlebarGridList);
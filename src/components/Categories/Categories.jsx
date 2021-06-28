import React from 'react';
import { changeCategory } from '../../reducers/categoriesReducer';
import { connect } from 'react-redux';
import { Paper, Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        width: "100vw",
        flexGrow: 1,
    },

});
function Categories(props) {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Tabs
                value={props.categories.active}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                {props.categories.categories.map((item, idx) => {
                    return (<Tab value={item.name} label={item.displayName} key={idx + (idx * 2)} onClick={(e) => {
                        e.preventDefault();
                        props.changeCategory(item.name);
                    }} />)
                })}
            </Tabs>
        </Paper>)

}

const mapStateToProps = state => ({
    categories: state.categoriesReducer,
    products: state.productsReducer
});
const mapDispatchToProps = { changeCategory: changeCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
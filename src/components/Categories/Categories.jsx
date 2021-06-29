import React from 'react';
import { changeCategory } from '../../reducers/categoriesReducer';
import { connect } from 'react-redux';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        width: "100%",
        alignItems:'center'
    },

});
function Categories(props) {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root} style={{zIndex:'100'}}>
            <Tabs value={props.categories.active}  aria-label="simple tabs example">
                {props.categories.categories.map((item, idx) => {
                    return (<Tab value={item} key={idx + (idx * 2)} label={item} onClick={(e) => {
                        e.preventDefault();
                        props.changeCategory(item);
                    }} />)
                })}
            </Tabs>
        </AppBar>)
}

const mapStateToProps = state => ({
    categories: state.categoriesReducer,
    products: state.productsReducer
});
const mapDispatchToProps = { changeCategory: changeCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
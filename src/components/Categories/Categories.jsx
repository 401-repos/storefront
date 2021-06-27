import React from 'react';
import { changeCategory } from '../../reducers/categoriesReducer';
import { connect } from 'react-redux';

function Categories(props) {  
    return (
        <nav>
            <ul>
                {props.categories.categories.map((item,idx) => <li key={idx}><a onClick={(e)=>{
                    e.preventDefault();
                    props.changeCategory(item.name);
                }} href='/'>{item.displayName}</a></li>)}
            </ul>
        </nav>
    );
}
// 1- add the state to this component props
const mapStateToProps = state => ({
    categories: state.categoriesReducer,
    products:state.productsReducer
});

// 2- since I have some actions to use: 
// add the actions to the component props
const mapDispatchToProps = {changeCategory: changeCategory};

//3. connect your component and export it after its connected to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
import axios from "axios";

const initState = {
    allProducts: [],
    filteredProduct: [],
    productDetailed: {}
};

const productsReducer = (state = initState, action) => {

    const { type, payload } = action;
    const products = [...state.allProducts];
    switch (type) {
        case 'FITCH_DATA':
            return { ...state, allProducts: payload.data };
        case 'CHANGE_CATEGORIES':
            return { ...state, filteredProduct: state.allProducts.filter(item => item.category === payload.name.toLowerCase() && item.inventory > 0) };
        case 'ADD_TO_CART':
            const allProducts = state.allProducts.map(elem => {
                if (elem.item === payload.item && !elem.cartItem) {
                    return { ...payload, cartItem: true }
                }
                return elem;
            });
            let filteredProduct = allProducts.filter(item => item.inventory > 0 && item.category === payload.category);
            return { ...state,allProducts, filteredProduct }
        case 'INCREMENT_QUANTITY':
            for (let item of products) {
                if (item.item === payload.item) {
                    item.inventory = parseInt(payload.inventory);
                }
            }
            if (payload.activeCategory.toLowerCase() === payload.category) {
                const filtered = state.allProducts.filter(item => item.inventory > 0 && item.category === payload.category);
                return { ...state, allProducts: products, filteredProduct: filtered };

            } else {
                return { ...state, allProducts: products };
            }
        case 'DECREMENT_QUANTITY':
            for (let item of products) {
                if (item.item === payload.item) {
                    item.inventory = parseInt(payload.inventory);
                }
            }
            if (payload.activeCategory.toLowerCase() === payload.category) {
                const filtered2 = state.allProducts.filter(item => item.inventory > 0 && item.category === payload.category);
                return { ...state, allProducts: products, filteredProduct: filtered2 };
            } else {
                return { ...state, allProducts: products };

            }
        case "DETAILS":
            return { ...state, productDetailed: {...payload} };
        case 'NOT_CART_ITEM':
            for (let item of products) {
                if (item.item === payload.item) {
                    item.cartItem = false;
                }
            }
            if (payload.activeCategory.toLowerCase() === payload.category) {
                const filtered3 = state.allProducts.filter(item => item.inventory > 0 && item.category === payload.category);
                return { ...state, allProducts: products, filteredProduct: filtered3 };
            } else {
                return { ...state, allProducts: products };
            }
        case 'DELETE_ITEM':
            for (let product of products) {
                if (product.item === payload.item) {
                    product.cartItem = false;

                    product.inventory = parseInt(payload.inventory);
                }
            }
            if (payload.activeCategory.toLowerCase() === payload.category) {
                const filtered4 = state.allProducts.filter(item => item.inventory > 0 && item.category === payload.category);
                return { ...state, allProducts: products, filteredProduct: filtered4 };
            } else {
                return { ...state, allProducts: products };
            }
        default:
            return state;
    }
}
export const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item
    }
}
export const addToCartDB = (item) => dispatch => {
    if (!item.isCartItem) {

        axios.put('https://api-server-0.herokuapp.com/products/increment/' + item.id, {}, {
            headers: {
                "Access-Control-Allow-Origin": "https://api-server-0.herokuapp.com/"
            }
        }).then(res => {
            dispatch(addToCart({ ...res.data, activeCategory: item.activeCategory }))
        }).catch(err => {
            console.log(err.message)
        });
    } else {
        dispatch({ type: "ANY" })
    }
}

export const incrementQuantity = (item) => {
    return {
        type: 'INCREMENT_QUANTITY',
        payload: item
    }
}
export const incrementQuantityDB = (item) => dispatch => {
    axios.put('https://api-server-0.herokuapp.com/products/increment/' + item.id, {}, {
        headers: {
            "Access-Control-Allow-Origin": "https://api-server-0.herokuapp.com/"
        }
    }).then(res => {
        dispatch(incrementQuantity({ ...res.data, activeCategory: item.activeCategory }))
    }).catch(err => {
        console.log(err.message)
    });
}
export const decrementQuantity = (item) => {
    return {
        type: 'DECREMENT_QUANTITY',
        payload: item
    }
}
export const decrementQuantityDB = (item) => dispatch => {
    axios.put('https://api-server-0.herokuapp.com/products/decrement/' + item.id, {}, {
        headers: {
            "Access-Control-Allow-Origin": "https://api-server-0.herokuapp.com/"
        }
    }).then(res => {
        dispatch(decrementQuantity({ ...res.data, activeCategory: item.activeCategory }))
    }).catch(err => {
        console.log(err.message)
    });
}
export const notCartItem = (item) => {
    return {
        type: 'NOT_CART_ITEM',
        payload: item
    }
}
export const fetchDataAction = (data) => {
    return {
        type: 'FITCH_DATA',
        payload: {
            data
        }
    }
}

export const fetchData = function () {
    return (dispatch) => {
        axios.get('https://api-server-0.herokuapp.com/products')
            .then(resp => {
                dispatch(fetchDataAction(resp.data));
            }).catch(err => {
                console.log(err.message)
            });
    }
}
export const productDetailed= function (payload){
    return {
        type:"DETAILS",
        payload
    }

}

export default productsReducer;
const initState = {
    allProducts: [
        { category: 'food', item: 'Zaatar', image: 'https://media.chefdehome.com/740/1060/1/zaatar/zaatar-recipe.jpg', description: 'It is the best from palestine', inventory: 8, price: '20JDs' },
        { category: 'food', item: 'Burger', image: 'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg', description: 'You will never forget the taste of this one', inventory: 10, price: '5JDs' },
        { category: 'food', item: 'Salmon', image: 'https://images.thefishsite.com/fish/articles/processing/salmon-fillet.jpeg?profile=article-full', description: 'Smoked and well done!', inventory: 15, price: '12JDs' },
        { category: 'clothes', item: 'Shoes', image: 'https://cdn.vox-cdn.com/thumbor/S4ka2uwWyJ9rHJFDwVa8BQCqMHA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22406771/Exbfpl2WgAAQkl8_resized.jpeg', description: 'From the heart of Nike', inventory: 16, price: '50JDs' },
        { category: 'clothes', item: 'Training Suit', image: 'https://image-tb.airyclub.com/image/500_500/filler/de/2b/3644507033ce80cdbe4dd30dfd53de2b.jpg', description: 'Never Sweat', inventory: 20, price: '35JDs' }
    ],
    filteredProduct: []
};

const productsReducer = (state = initState, action) => {

    const { type, payload } = action;
    const products = [...state.allProducts];
    switch (type) {
        case 'CHANGE_CATEGORIES':
            return { ...state, filteredProduct: state.allProducts.filter(item => item.category === payload.name && item.inventory > 0) };
        case 'ADD_TO_CART':
            const allProducts = state.allProducts.map(elem => {
                if (elem.item === payload.item && !elem.cartItem) {
                    let inv = elem.inventory - 1;
                    return { ...elem, inventory: inv, cartItem: true }
                }
                return elem;
            });
            let filteredProduct = allProducts.filter(item => item.inventory > 0 && item.category === payload.category);
            return { allProducts, filteredProduct }
        case 'INCREMENT_QUANTITY':
            for (let item of products) {
                if (item.item === payload.item) {
                    item.inventory--;
                }
            }
            const filtered = state.allProducts.filter(item => item.inventory > 0 && item.category === payload.category);
            return { ...state, allProducts: products, filteredProduct: filtered };
        case 'DECREMENT_QUANTITY':
            for (let item of products) {
                if (item.item === payload.item) {
                    item.inventory += 1;
                }
            }
            const filtered2 = state.allProducts.filter(item => item.inventory > 0 && item.category === payload.category);
            return { ...state, allProducts: products, filteredProduct: filtered2 };
        case 'NOT_CART_ITEM':
            for (let item of products) {
                if (item.item === payload.item) {
                    item.cartItem = false;
                }
            }
            const filtered3 = state.allProducts.filter(item => item.inventory > 0 && item.category === payload.category);
            return { ...state, allProducts: products, filteredProduct: filtered3 };
        case 'DELETE_ITEM':
            for (let product of products) {
                if (product.item === payload.item) {
                    product.inventory += parseInt(payload.qty);
                }
            }
            const filtered4 = state.allProducts.filter(item => item.inventory > 0 && item.category === payload.category);
            return { ...state, allProducts: products, filteredProduct: filtered4 };
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

export const incrementQuantity = (item) => {
    return {
        type: 'INCREMENT_QUANTITY',
        payload: item
    }
}
export const decrementQuantity = (item) => {
    return {
        type: 'DECREMENT_QUANTITY',
        payload: item
    }
}
export const notCartItem = (item) => {
    return {
        type: 'NOT_CART_ITEM',
        payload: item
    }
}
export default productsReducer;
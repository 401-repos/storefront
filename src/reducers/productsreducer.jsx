const initState = {
    allProducts: [
        { category: 'food', name: 'Zaatar', image: 'https://media.chefdehome.com/740/1060/1/zaatar/zaatar-recipe.jpg', description: 'It is the best from palestine', inventory: 30, price: '20JDs' },
        { category: 'food', name: 'Burger', image: 'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg', description: 'You will never forget the taste of this one', inventory: 16, price: '5JDs' },
        { category: 'food', name: 'Salmon',image:'https://images.thefishsite.com/fish/articles/processing/salmon-fillet.jpeg?profile=article-full', description: 'Smoked and well done!', inventory: 10, price: '12JDs' },
        { category: 'clothes', name: 'Shoes',image:'https://cdn.vox-cdn.com/thumbor/S4ka2uwWyJ9rHJFDwVa8BQCqMHA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22406771/Exbfpl2WgAAQkl8_resized.jpeg', description: 'From the heart of Nike', inventory: 16, price: '50JDs' },
        { category: 'clothes', name: 'Training Suit',image:'https://image-tb.airyclub.com/image/500_500/filler/de/2b/3644507033ce80cdbe4dd30dfd53de2b.jpg', description: 'Never Sweat', inventory: 5, price: '35JDs' }
    ],
    filteredProduct: []
};

const productsReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'CHANGE_CATEGORIES':
            return { ...state, filteredProduct: state.allProducts.filter(item => item.category === payload.name) };
        default:
            return state;
    }
}

export default productsReducer;
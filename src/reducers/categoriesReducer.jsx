const initState = {
    categories: [],
    active: null
}

const categoriesReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'CHANGE_CATEGORIES':
            return { ...state, active: payload.name }
        case 'FITCH_DATA':
            const categories = new Set();
            
            payload.data.forEach(({category})=>{
                    categories.add(category.toUpperCase())
            });
            return {...state, categories:[...categories]}
        default:
            return state;
    }
}

export const changeCategory = (name) => {
    return {
        type: 'CHANGE_CATEGORIES',
        payload: { name }
    }
}

export default categoriesReducer;
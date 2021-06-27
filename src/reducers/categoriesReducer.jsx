const initState = {
    categories: [{ name: 'food', displayName: 'FOOD', description:'Buy best food in the world.' }, 
    { name: 'clothes', displayName: 'CLOTHES', description:'Our collection is unique.' }],
    active:null
}

const categoriesReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'CHANGE_CATEGORIES':
            return {...state, active:payload.name}
        default:
            return state;
    }
}

export const changeCategory= (name) => {
    return {
        type: 'CHANGE_CATEGORIES',
        payload: {name}
    }
}

export default categoriesReducer;
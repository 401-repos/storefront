import axios from 'axios';

const initState = {
    items: [],
    totalPrice: 0,
};

function cartReducer(state = initState, action) {
    const { type, payload } = action;
    let items = [...state.items];
    switch (type) {
        case 'ADD_TO_CART':
            let flag = false;
            for (let { item } of state.items) {
                if (item === payload.item) {
                    flag = true;
                }
            }
            if (!flag) {
                const items = [...state.items];
                items.push({ ...payload,item: payload.item, quantity: 1, category: payload.category, id:payload._id })
                return { ...state, items };
            } else {
                return state;
            }
        case 'CHANGE_QUANTITY':
            for (let item in items) {
                if (items[item].item === payload.item) {
                    if (payload.qty < 1) {
                        items.splice(item, 1)
                    } else if (payload.qty > 0) {
                        items[item].quantity = payload.qty;
                    }
                }
            }
            return { ...state, items };
        case 'DELETE_ITEM':
            for(let item in items){
                if(items[item].item === payload.item){
                    items.splice(item,1)
                }
            }
            return {...state, items}
        default:
            return state;
    }
}

export const changeQty = (item) => {
    return {
        type: 'CHANGE_QUANTITY',
        payload: {
            item: item.item,
            qty: item.qty
        }
    }
}

export const deleteItem = (item) => {
    return {
        type: 'DELETE_ITEM',
        payload: {
            ...item,
            item: item.item,
            qty: item.qty
        }
    }
}
export const deleteItemDB = (item) =>dispatch => {
    axios.put('https://api-server-0.herokuapp.com/products/delete/' + item.id, {qty:item.qty},{headers:{
        "Access-Control-Allow-Origin":"https://api-server-0.herokuapp.com/"
    }}).then(res => {
        dispatch(deleteItem({...res.data,activeCategory:item.activeCategory}))
    }).catch(err => {
        console.log(err.message)
    });
}
export default cartReducer;
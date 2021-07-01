import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { TextField } from "@material-ui/core";
import { changeQty, deleteItemDB } from "../../reducers/cartReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { incrementQuantityDB, decrementQuantityDB, notCartItem } from "../../reducers/productsreducer";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 360,
        width:'100%',
        backgroundColor: theme.palette.background.default,
        zIndex:"100",
        position:"fixed"
    }
}));

export default function SimpleCart() {
    const classes = useStyles();
    const items = useSelector(state => state.cart.items);
    const activeCategory = useSelector(state=>state.categoriesReducer.active)
    const products = useSelector(state => state.productsReducer.allProducts);
    const dispatch = useDispatch();
    return (
        <List dense className={classes.root}>
            {items.map((item, idx) => {
                return (
                    <ListItem key={idx} button>
                        <ListItemText primary={item.item.split(' ').slice(0,5).join(' ')} />
                        <ListItemSecondaryAction>
                            <TextField
                                style={{ width: "3rem" }}
                                id="outlined-number"
                                onChange={(e) => {
                                    const payload = {id:item.id, item: item.item, qty: e.target.value, category: item.category, activeCategory }
                                    if (parseInt(e.target.value) < 1) {
                                        dispatch(notCartItem(payload))
                                    }
                                    if (parseInt(item.quantity) > parseInt(e.target.value)) {
                                        dispatch(decrementQuantityDB(payload))
                                    } else {
                                        dispatch(incrementQuantityDB(payload))
                                    }
                                    dispatch(changeQty(payload));
                                }}
                                label="Quantity"
                                value={item.quantity}
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                    variant:'filled',
                                }}
                                InputProps={{
                                    inputProps: {
                                        max: parseInt(products.filter(elem => elem.item === item.item)[0].inventory)+item.quantity,
                                        min: 0
                                    }
                                }}
                            />
                            <IconButton onClick={() => {
                                const qty = parseInt(item.quantity)
                                const payload = { item: item.item, qty, category: item.category , activeCategory, id:item.id}
                                dispatch(deleteItemDB(payload));
                                dispatch(notCartItem(payload))
                            }} aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import TitlebarGridList from './Grid';
import { addToCartDB } from '../../reducers/productsreducer';
import { productDetailed } from '../../reducers/productsreducer';


const useStyles = makeStyles({
    root: {
        maxWidth: "25vw",
        margin: "1rem"
    },
    media: {
        height: 140,
    },
});

function MediaCard(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea key={321}>
                <CardMedia
                    className={classes.media}
                    image={props.item.image}
                    title={props.item.item}
                />
                <CardContent>
                    <Typography key={322} gutterBottom variant="h5" component="h2">
                        {props.item.item}
                    </Typography>
                    <Typography key={159} variant="body2" color="textSecondary" component="p">
                        {props.item.description}
                    </Typography>
                    <Typography key={15654} variant="body2" color="textSecondary" component="p">
                        In Stock:{props.item.inventory}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions key={123}>
                <Button key={1} onClick={() => {
                    dispatch(addToCartDB({
                        isCartItem: props.item.cartItem ? props.item.cartItem : false,
                        item: props.item.item, category: props.item.category, id: props.item._id
                    }))
                }} size="small" color="primary">
                    ADD TO CART
                </Button>
                <Link to={`/product/${props.item._id}`} onClick={()=>{
                    dispatch(productDetailed(props.item))
                }} style={{ textDecoration: "none" }}>
                    <Button key={2} size="small" color="primary">
                        PRODUCT DETAILS
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}



function Products() {
    const filteredProduct = useSelector(state => state.productsReducer.filteredProduct);
    return (
        <TitlebarGridList>
            {filteredProduct.map((item, idx) => <MediaCard key={idx * (idx + 123)} item={item} />)}
        </TitlebarGridList>);
}
export default Products;
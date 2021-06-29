import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TitlebarGridList from './Grid';
import { addToCart } from '../../reducers/productsreducer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


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
                <Button key={1} onClick={()=>{dispatch(addToCart({item:props.item.item, category:props.item.category}))}} size="small" color="primary">
                    ADD TO CART
                </Button>
                <Button key={2} size="small" color="primary">
                    PRODUCT DETAILS
                </Button>
            </CardActions>
        </Card>
    );
}



function Products(props) {
    const filteredProduct = useSelector(state => state.productsReducer.filteredProduct);
    console.log(filteredProduct)
    return (
        <TitlebarGridList>
            {filteredProduct.map((item, idx) => <MediaCard key={idx*(idx+123)} item={item} addToCart={addToCart} />)}
        </TitlebarGridList>);
}
export default Products;
import { connect } from 'react-redux';
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


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.item.image}
                    title={props.item.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.item.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    ADD TO CART
                </Button>
                <Button size="small" color="primary">
                    PRODUCT DETAILS
                </Button>
            </CardActions>
        </Card>
    );
}



function Products(props) {
    return (
        <TitlebarGridList>
                {props.products.filteredProduct.map((item, idx) => <MediaCard item={item} />)}
        </TitlebarGridList>)

}

const mapStateToProps = state => ({
    products: state.productsReducer,
});


//3. connect your component and export it after its connected to redux store
export default connect(mapStateToProps)(Products);
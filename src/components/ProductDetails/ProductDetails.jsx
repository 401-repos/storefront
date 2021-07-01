import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, CardActionArea, CardContent, Accordion, CardMedia, AccordionDetails, AccordionSummary, Container } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Typography, Grid, Paper } from '@material-ui/core';
import { addToCartDB } from '../../reducers/productsreducer';
import SimpleCart from '../SimpleCart/SimpleCart';

function ProductDetails() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items)
    const product = useSelector(state => {
        return state.productsReducer.productDetailed
    });
    return (
        <Container style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            {cart.length > 0 ? <div style={{ position: "fixed", right: '10%', width: "20%", zIndex: "1000" }}>
                <SimpleCart />
            </div> : null}
            <Typography variant="h3" component="h3" style={{marginTop:"2rem"}}>
                {product.item}
            </Typography>
            <Card style={{ width: "500px" }}>
                <CardActionArea style={{display:"flex" , flexDirection:"column", alignItems:"center"}}>
                    <CardMedia
                        component="img"
                        align
                        alt={product.item}
                        style={{ height: "300px", width: "300px" }}
                        image={product.image}
                        title={product.item}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActionArea style={{ display: "flex", justifyContent: "space-between", padding: "1rem 2rem" }}>

                    <Typography variant="h6" component="h6">
                        Price: {product.price}
                    </Typography>
                    <Typography variant="h6" component="h6">
                        Stock: {product.inventory}
                    </Typography>
                </CardActionArea>
            </Card>
            <Grid container style={{ width: "500px", height: "150px", display: "flex", alignItems: "center" }}>
                <Grid item xs={12} >
                    <Button onClick={() => {
                        dispatch(addToCartDB({
                            ...product,
                            id: product._id,
                            isCartItem: product.cartItem ? product.cartItem : false,
                        }))
                    }} style={{ width: "500px" }} variant="contained" color="primary" >
                        Add To Cart
                    </Button>
                </Grid>
            </Grid>
            <Grid container style={{ width: "500px", height: "150px" }}>

                <Grid item xs={12} >
                    <Typography variant="h4" gutterBottom={true}>Related Items</Typography>
                </Grid>

                <Grid item xs={4}>
                    <Paper style={{ height: "2rem" }}>Suggestion 1</Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper style={{ height: "2rem" }}>Suggestion 2</Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper style={{ height: "2rem" }}>Suggestion 3</Paper>
                </Grid>

            </Grid>
            <Typography variant="h4" component="h4">
                Product Details
            </Typography>
            <div style={{ width: "500px", marginBottom: "3rem" }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography >Specifications</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography >User Reviews</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </Container>
    );
}

export default ProductDetails;

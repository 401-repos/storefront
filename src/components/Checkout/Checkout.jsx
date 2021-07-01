import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
}));

function Checkout(props) {
    const cart = props.cart;
    console.log(cart)
    const classes = useStyles();

    const total = cart.reduce((acc, item) => acc + parseInt(item.price), 0);
    return (
        <div className={classes.layout}>
            <form>
                <Paper className={classes.paper}>
                    <Typography variant="h6" gutterBottom>
                        Order summary
                    </Typography>
                    <List disablePadding>
                        {cart.map((item) => (
                            <ListItem className={classes.listItem} key={item._id}>
                                <ListItemText primary={item.name} secondary={item.description} />
                                <Typography>${item.price}</Typography>
                            </ListItem>
                        ))}
                        <ListItem className={classes.listItem}>
                            <ListItemText primary="Total" />
                            <Typography variant="subtitle1" className={classes.total}>
                                ${total}
                            </Typography>
                        </ListItem>
                    </List>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" gutterBottom className={classes.title}>
                                Billing Address
                            </Typography>
                            <TextField label="Name" />
                            <TextField label="Address" />
                            <TextField label="City" />
                            <TextField label="Country" />
                            <TextField label="zip code" />
                        
                            <Typography variant="h6" gutterBottom className={classes.title}>
                                Payment details
                            </Typography>
                            <TextField name="cc_number" label="Credit Card #" />
                            <TextField
                                label="Expiration"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField id="cvv" name="cvv" label="CVV" />
                        
                            <Button style={{marginTop:"2rem", width:"200px"}} variant="contained" color="default">Buy</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        </div >
    );
}

export default Checkout;

import { useSelector } from 'react-redux';
import Categories from "../Categories/Categories";
import Products from "../Products/Products";
import SimpleCart from '../SimpleCart/SimpleCart';

function Main(props) {
    const cart = useSelector(state => state.cart.items)

    return (
        <>
            <div style={{ minHeight: "80vh" }}>
                {cart.length > 0 ? <div style={{ position: "fixed", right: '10%', width: "20%", zIndex: "1000" }}>
                    <SimpleCart />
                </div> : null}
                <div style={{ width: "100vw", display: "flex", flexDirection: "column" }}>
                    <Categories />
                    <Products />
                </div>
            </div>
        </>
    )
}
export default Main;
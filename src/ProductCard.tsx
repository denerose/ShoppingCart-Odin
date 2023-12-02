import PropTypes from 'prop-types';
import { ShopContext } from './App';
import { useContext } from 'react';

export function ProductCard(props) {

    return (
        <div className="w3-card w3-sand w3-quarter w3-margin w3-mobile">
            <img src={props.img} alt="image of product" className='w3-image' />
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <AddMe item={{ itemkey: props.itemkey, name: props.name, img: props.img }} />
        </div >
    )
}

ProductCard.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    itemkey: PropTypes.string,
}

function AddMe({ item }: { item: object }) {
    const { cartItems, setCartItems } = useContext(ShopContext)

    return (
        <button onClick={() => {
            setCartItems([
                ...cartItems,
                item
            ]);
        }}>BUTTON</button>
    )
}
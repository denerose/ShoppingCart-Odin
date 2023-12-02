import PropTypes from 'prop-types';
import { ShopContext } from './App';
import { useContext } from 'react';

export function ProductCard(props) {

    return (
        <div className="w3-card w3-grid w3-sand w3-quarter w3-margin w3-padding w3-mobile">
            <img src={props.img} alt="image of product" className='w3-image' />
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <div className='w3-row'>
                <div className='w3-half w3-left'><img src='src/assets/minicoin.png' height='16px' /><span> ₴{props.price}</span></div>
                <AddMe item={{ itemkey: props.itemkey, name: props.name, img: props.img, uid: crypto.randomUUID() }} />
            </div>
        </div >
    )
}

ProductCard.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.number,
    itemkey: PropTypes.string
}

function AddMe({ item }: { item: object }) {
    const { cartItems, setCartItems } = useContext(ShopContext)

    return (
        <button className='w3-right' onClick={() => {
            setCartItems([
                ...cartItems,
                item
            ]);
        }}>Add to Cart</button>
    )
}
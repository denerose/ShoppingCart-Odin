import PropTypes from 'prop-types';
import { ShopContext } from './App';
import { useContext } from 'react';

export function ProductCard(props) {

    return (
        <div className="w3-card w3-sand w3-quarter w3-margin w3-mobile">
            <img src={props.img} alt="image of product" className='w3-image' />
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <AddMe />
        </div>
    )
}

ProductCard.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    key: PropTypes.string,
}

function AddMe() {
    const { count, setCount } = useContext(ShopContext)

    return (
        <button onClick={() => { setCount((count) => count + 1) }}>BUTTON</button>
    )
}
import PropTypes from 'prop-types';

export function ProductCard(props) {

    return (
        <div className="w3-card w3-sand w3-quarter w3-margin w3-mobile">
            <img src={props.img} alt="image of product" className='w3-image' />
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
        </div>
    )
}

ProductCard.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
}
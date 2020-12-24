import { addToCart } from '../../redux/cart/cartActions';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { connect } from 'react-redux';
import './collection-item.styles.scss';

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: ((item) => dispatch(addToCart(item)))
    };
}

const CollectionItem = ({ item, addItemToCart  }) => {
    const { imageUrl, name, price } = item;
    return (
        <div className="collection-item">
            <div className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
            }}></div>
            <div className="collection-footer">
                <span className="name">{ name }</span>
                <span className="price">{ `$${price}` }</span>
            </div>
            <CustomButton onClick={() => addItemToCart(item)} inverted>ADD TO CART</CustomButton>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(CollectionItem);
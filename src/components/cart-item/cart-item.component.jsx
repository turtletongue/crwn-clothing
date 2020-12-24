import './cart-icon.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="cart-item" />
            <div className="item-details">
                <span className="name">{ name }</span>
                <br />
                <span className="price">{quantity} x ${ price }</span>
            </div>
        </div>
    );
}

export default CartItem;
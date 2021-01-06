import { addToCartStart } from '../../redux/cart/cartActions';
import { connect } from 'react-redux';
import { CollectionItemContainer, 
        ImageContainer, 
        CollectionFooterContainer, 
        NameContainer, 
        PriceContainer,
        CustomButtonContainer } from './collection-item.styles.jsx';

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: ((item) => dispatch(addToCartStart(item)))
    };
}

const CollectionItem = ({ item, addItemToCart  }) => {
    const { imageUrl, name, price } = item;
    return (
        <CollectionItemContainer>
            <ImageContainer
                style={{
                    backgroundImage: `url(${imageUrl})`
            }}></ImageContainer>
            <CollectionFooterContainer>
                <NameContainer>{ name }</NameContainer>
                <PriceContainer>{ `$${price}` }</PriceContainer>
            </CollectionFooterContainer>
            <CustomButtonContainer onClick={() => addItemToCart(item)} inverted>ADD TO CART</CustomButtonContainer>
        </CollectionItemContainer>
    );
}

export default connect(null, mapDispatchToProps)(CollectionItem);
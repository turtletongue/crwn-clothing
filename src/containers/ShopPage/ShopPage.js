import shopData from './ShopData';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

const ShopPage = () => {
    return (
        <div className="shop-page">
            {
                shopData.map(({id, ...otherCollectionProps}) => {
                    return <CollectionPreview key={id} {...otherCollectionProps} />
                })
            }
        </div>
    );
}

export default ShopPage;
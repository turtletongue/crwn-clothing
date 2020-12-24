import CollectionItem from '../../components/collection-item/collection-item.component.jsx';
import './collection-page.styles.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelectors';

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    };
}

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{ title }</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
}

export default connect(mapStateToProps)(CollectionPage);
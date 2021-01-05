import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelectors';
import CollectionItem from '../../components/collection-item/collection-item.component.jsx';
import { CollectionPageContainer, TitleContainer, ItemsContainer } from './collection-page.styles.jsx';

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    };
}

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <TitleContainer>{ title }</TitleContainer>
            <ItemsContainer>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </ItemsContainer>
        </CollectionPageContainer>
    );
}

export default connect(mapStateToProps)(CollectionPage);
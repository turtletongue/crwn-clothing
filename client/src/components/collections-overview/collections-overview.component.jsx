import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionForPreview } from '../../redux/shop/shopSelectors';
import CollectionPreview from '../collection-preview/collection-preview.component.jsx';
import { CollectionsOverviewContainer } from './collections-overview.styles.jsx';

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});


const CollectionsOverview = ({ collections }) => {
    return (
        <CollectionsOverviewContainer>
            {
                collections.map(({id, ...otherCollectionProps}) => {
                    return <CollectionPreview key={id} {...otherCollectionProps} />
                })
            }
        </CollectionsOverviewContainer>
    );
}

export default connect(mapStateToProps)(CollectionsOverview);
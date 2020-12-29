import { Route } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shopActions.js';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container.jsx';
import CollectionPageContainer from '../collection-page/collection-page.container.jsx';

const mapDispatchToProps = dispatch => {
    return {
        updateCollections: () => dispatch(fetchCollectionsStart())
    };
}

const ShopPage = ({ match, updateCollections }) => {

    useEffect(() => {
        updateCollections();
    }, [updateCollections]);

    return (
        <div>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    );
}

export default connect(null, mapDispatchToProps)(ShopPage);
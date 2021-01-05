import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shopActions';
import Spinner from '../../components/spinner/spinner.component';

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection-page/collection-page.container'));

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
        <Suspense fallback={<Spinner />}>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </Suspense>
    );
}

export default connect(null, mapDispatchToProps)(ShopPage);
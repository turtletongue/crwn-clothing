import CollectionsOverview from '../../components/collections-overview/collections-overview.component.jsx';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection-page/collection-page.component.jsx';
import { useEffect, useRef, useState } from 'react';
import { firestore, converCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopActions.js';
import WithSpinner from '../../components/with-spinner/with-spinner.component.jsx';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const mapDispatchToProps = dispatch => {
    return {
        updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    };
}

const ShopPage = ({ match, updateCollections }) => {

    const [loading, setLoading] = useState(true);

    const unsubscribeFromSnapshot = useRef(null);
    useEffect(() => {
        const collectionRef = firestore.collection('collections');

        unsubscribeFromSnapshot.current = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = converCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            setLoading(false);
        });

        return unsubscribeFromSnapshot.current;
    }, [updateCollections]);
    return (
        <div>
            <Route exact path={`${match.path}`} render={props => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
        </div>
    );
}

export default connect(null, mapDispatchToProps)(ShopPage);
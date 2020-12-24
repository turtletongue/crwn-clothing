import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import { Route } from 'react-router-dom';
import CollectionPage from '../CollectionPage/CollectionPage';

const ShopPage = ({ match }) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );
}

export default ShopPage;
import CollectionsOverview from '../../components/collections-overview/collections-overview.component.jsx';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection-page/collection-page.component.jsx';

const ShopPage = ({ match }) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );
}

export default ShopPage;
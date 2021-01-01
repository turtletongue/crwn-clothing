import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsLoading } from '../../redux/shop/shopSelectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection-page.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionsLoading
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
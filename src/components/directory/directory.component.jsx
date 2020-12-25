import MenuItem from '../menu-item/menu-item.component.jsx';
import { createStructuredSelector } from 'reselect';
import { getSections } from '../../redux/directory/directorySelectors';
import { connect } from 'react-redux';
import { DirectoryMenuContainer } from './directory.styles.jsx';

const mapStateToProps = createStructuredSelector({
    sections: getSections
});

const Directory = ({ sections }) => {
    return (
        <DirectoryMenuContainer>
            { sections.map(({ id, ...otherMenuItemProps}) => {
                return <MenuItem key={id} {...otherMenuItemProps} />
            }) }
        </DirectoryMenuContainer>
    );
}

export default connect(mapStateToProps)(Directory);
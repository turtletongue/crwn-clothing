import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';
import { createStructuredSelector } from 'reselect';
import { getSections } from '../../redux/directory/directorySelectors';
import { connect } from 'react-redux';

const mapStateToProps = createStructuredSelector({
    sections: getSections
});

const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            { sections.map(({ id, ...otherMenuItemProps}) => {
                return <MenuItem key={id} {...otherMenuItemProps} />
            }) }
        </div>
    );
}

export default connect(mapStateToProps)(Directory);
import MenuItem from '../MenuItem/MenuItem';
import './Homepage.scss';

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <MenuItem title="HATS" />
                <MenuItem title="JAKETS" />
                <MenuItem title="SNEAKERS" />
                <MenuItem title="WOMENS" />
                <MenuItem title="MENS" />
            </div>
        </div>
    );
}

export default Homepage;
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    return (
        <div className={`${size ? size : ""} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div style={{
                background: `url(${imageUrl}) no-repeat center center`,
                backgroundSize: 'cover'
            }} className="background-image" />
            <div className="content">
                <h1 className="title">{ title.toUpperCase() }</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);
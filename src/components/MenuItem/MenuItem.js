import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
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

export default MenuItem;
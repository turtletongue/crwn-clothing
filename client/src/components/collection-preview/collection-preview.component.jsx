import React from 'react';
import CollectionItem from '../collection-item/collection-item.component.jsx';
import { Link, withRouter } from 'react-router-dom';
import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles.jsx';

const CollectionPreview = ({ title, items, routeName, match }) => {
    return (
        <CollectionPreviewContainer>
            <Link to={`${match.path}/${routeName}`}><TitleContainer>{ title.toUpperCase() }</TitleContainer></Link>
            <PreviewContainer>
                {
                    items.filter((item, index) => index < 4).map((item) => {
                        return <CollectionItem key={item.id} item={item} />;
                    })
                }
            </PreviewContainer>
        </CollectionPreviewContainer>
    );
}

export default withRouter(CollectionPreview);
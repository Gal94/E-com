import React from 'react';
import CollectionItem from "../collection-item/collection-item.component";
import {CollectionPreviewContainer, Title, PreviewContainer} from "./collection-preview.styles";

//each collectionItem is in a flex box
const CollectionPreview = ({title, items}) => (
    <CollectionPreviewContainer >
        <Title className='title'>{title.toUpperCase()}</Title>
        <PreviewContainer className='preview'>
            {
                items.filter((item, index) => index < 4).map((item) => (
                    <CollectionItem item={item} key={item.id}/>
                ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
);
//sorts the items to display only 4 per category
export default CollectionPreview;
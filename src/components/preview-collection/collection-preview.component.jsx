import React from 'react';
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.component.styles.scss';

//each collectionItem is in a flex box
const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, index) => index < 4).map(({id, ...itemProps}) => (
                    <CollectionItem {...itemProps} key={id}/>
                ))
            }
        </div>
    </div>
);
//sorts the items to display only 4 per category
export default CollectionPreview;
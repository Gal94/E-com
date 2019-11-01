import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";

import {CollectionOverviewContainer} from './collection-overview.styles'
import CollectionPreview from "../preview-collection/collection-preview.component";

const CollectionsOverview = ({ collections }) => {
    return(
    <CollectionOverviewContainer>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </CollectionOverviewContainer>
)};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
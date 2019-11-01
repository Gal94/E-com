import React from 'react';
import {connect} from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectShopItem} from "../../redux/shop/shop.selectors";

import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
} from './category.styles';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </CollectionItemsContainer>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopItem(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
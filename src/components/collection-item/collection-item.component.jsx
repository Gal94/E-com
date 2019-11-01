import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import {CollectionItemContainer, CollectionFooter, CollectionImage, Button} from "./collection-item.styles";

const CollectionItem = ({item, addItem}) =>{
    const { name, price, imageUrl } = item;
    return(
        <CollectionItemContainer>
            <CollectionImage style={{backgroundImage: `url(${imageUrl})`}}></CollectionImage>
            <CollectionFooter>
                <span className='name'>{ name }</span>
                <span className='price'>${ price} </span>
            </CollectionFooter>
            <Button
                onClick={() => addItem(item)}
                inverted>
                Add to cart
            </Button>
    </CollectionItemContainer>
)};

const mapDispatchToProps = dispatch => ({
   addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);


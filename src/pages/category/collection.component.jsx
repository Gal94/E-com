import React from 'react';
import {connect} from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';
import {selectShopItem} from "../../redux/shop/shop.selectors";

const CollectionPage = ({ match, collection }) => {
    const {title, items} = collection;
    return (
        <div className='category'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item=> <CollectionItem key={item.id} item={item}/>)}
            </div>
        </div>
    );
};

//ownProps is the props of the component i.e match
//the selector also needs a part of the state because of it depending on a URL parameter
const mapStateToProps = (state, ownProps) => ({
    collection: selectShopItem(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
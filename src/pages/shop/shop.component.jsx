import React, {Component} from 'react';
import { SHOP_DATA } from '../../items';
import CollectionPreview from "../../components/preview-collection/collection-preview.component";
class ShopPage extends Component{
    constructor(props){
        super(props);

        this.state={
            collections: SHOP_DATA
        }
    }

    //each collection-preview is in it's own row
    render(){
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;
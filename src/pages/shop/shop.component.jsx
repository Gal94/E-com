import React from 'react';
import {Route} from 'react-router-dom';
import { firestore } from "../../firebase/firebase.utils";
import { convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import CollectionPage from "../category/collection.component";
import {connect} from 'react-redux';
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import {updateCollections} from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
    state = {
        loading: true
    };


     unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        /* Promise pattern, does only 1 api call when the component mounts */
        collectionRef.get().then(snapshot =>{
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({loading: false});
        })

        /*REST API + PROMISE PATTERN

        fetch('https://firestore.googleapis.com/v1/projects/eshop-db-3d9dd/databases/(default)/documents/collections')
            .then(response => response.json())
            .then(collections => console.log(collections));

        */
        /* Observer Pattern

         this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot =>{
             //transforms the collection into an array of objects and then into an object of objects.
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
         }) */
    }


    //route automatically passes route, match, history
    render() {
        const { match } = this.props;
        const {loading} = this.state;
        return (
            <div>
                <Route exact path={`${match.path}`} render={(props)=> <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch =>({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
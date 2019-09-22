import './directory.styles.scss';
import React, {Component} from 'react';
import MenuItem from "../menu-item/menuitem.component";
import { sections } from "./sections";


class Directory extends Component {
    constructor(props){
        super(props);
        this.state = {
            sections: sections
        }
    }
    render(){ // if a section has a size parameter it will spread if, if not will ignore.
        const items = this.state.sections.map(({id, ...otherSectionProps}) => ( //destruct all props
                    <MenuItem key={id} {...otherSectionProps}/> )); //spread props
        return(
            <div className='directory-menu'>
                {items}
            </div>
        )
    }
}
export default Directory;
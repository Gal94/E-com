import { DirectoryMenuContainer } from "./directory.styles";
import React from 'react';
import MenuItem from "../menu-item/menuitem.component";
import { connect } from 'react-redux';
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
    // if a section has a size parameter it will spread if, if not will ignore.
        const items = sections.map(({id, ...otherSectionProps}) => ( //destruct all props
                    <MenuItem key={id} {...otherSectionProps}/> )); //spread props
        return(
            <DirectoryMenuContainer>
                {items}
            </DirectoryMenuContainer>
        )
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);
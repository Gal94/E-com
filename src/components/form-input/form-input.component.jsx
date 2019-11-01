import React from 'react';
import {GroupContainer, InputLabel, FormInputContainer} from "./form-input.styles";

const FormInput = ({handleChange, label, ...otherProps}) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...otherProps}/>
        {
            label ?
                (<InputLabel className={otherProps.value.length ? 'shrink' : ''}>
                    {label}
                </InputLabel>)
                :
                null
        }
    </GroupContainer>
);

export default FormInput;
//user will always have form-input, and shrink only when user has typed anything
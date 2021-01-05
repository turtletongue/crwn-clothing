import React from 'react';
import { GroupContainer, FormInputContainer, FormInputLabelContainer } from './form-input.styles.jsx';

const FormInput = ({ handler, label, value, ...otherInputProps }) => {
    return (
        <GroupContainer>
            <FormInputContainer onChange={handler} value={value} {...otherInputProps} />
            {
                label ? 
                    <FormInputLabelContainer valueLength={value.length}>
                        { label }
                    </FormInputLabelContainer>
                    : null
            }
        </GroupContainer>
        
    );
}

export default FormInput;
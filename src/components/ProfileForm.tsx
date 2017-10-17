import * as React from 'react';
import { Field, reduxForm } from 'redux-form';

import { required, maxLength25 } from '../utils/validations';
import { renderField } from '../utils/textFieldGroup';
// import * as actions from '../actions/';

// const validateAndUpdateRecords = (values: {}, dispatch: Dispatch<actions.EnthusiasmAction>) => {
//    dispatch(actions.profileUpdate(values));
// };

export interface Props {
    handleSubmit?: any;
    validateAndUpdateRecords?: () => void;
    invalid: any;
}

let PrfForm = ({ handleSubmit, validateAndUpdateRecords, invalid }: Props) => {
        return (
            <div>
                <h1>Profile Page</h1>
                <form onSubmit={handleSubmit(validateAndUpdateRecords)}>
                    <Field 
                        placeholder="first Name"
                        name="fname" 
                        type="text"
                        component={renderField} 
                        validate={[ required, maxLength25 ]}
                    />
                    <Field 
                        name="lname" 
                        type="text" 
                        placeholder="last Name"
                        component={renderField} 
                        validate={[ required, maxLength25 ]}
                    />
                    <p>
                      <button type="submit" className="btn btn-primary btn-lg" disabled={invalid} >Submit</button>
                    </p>
                </form> 
            </div>
        );
};

let ProfileForm = reduxForm({
    form: 'profile'
})(PrfForm);

export default ProfileForm;

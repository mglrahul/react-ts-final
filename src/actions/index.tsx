import * as constants from '../constants';

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export interface ProfileUpdate {
    type: constants.PROFILE_UPDATE;
    data: {fname: string, lname: string };
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm | ProfileUpdate;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}

export function profileUpdate(data: {fname: string, lname: string }): ProfileUpdate {
    console.log('action: ',data);
    
    return {
        type: constants.PROFILE_UPDATE,
        data
    };
}
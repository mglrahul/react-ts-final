// src/reducers/index.tsx

import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import { PROFILE_UPDATE } from '../constants/index';

let InitialState: StoreState = {
  fname: '',
  lname: ''
};

export default (state = InitialState, action: EnthusiasmAction): StoreState => {
    
  switch (action.type) {
    case PROFILE_UPDATE:
      console.log('reducer: ', action);
      return { ...state, fname: 'test' };
    default:
        return state;
  }
};

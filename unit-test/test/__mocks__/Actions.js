require('babel-polyfill');
import axios from 'axios';
import actionType from '../../core/account-summary/ActionTypes';
import { BASE_URL, GET_ACCOUNT_SUMMARY, SERVER_ERROR } from '../../core/constants/constants';
//import request from '../common/api';

/*
 Method : getAccountSummary()
 Description:  This action fires async call to the summary api end points
 Return Type : Object   
*/

const accountSummaryData = {accountBalance: 10};
export function getAccountSummary() {
  return dispatch => {
    dispatch(getAccountSummaryPending())
    return axios({method: 'GET', url : `http://example.com/summary`})
      .then(res => res)
      .then(json => dispatch(getAccountSummarySuccess(Object.assign({}, json, accountSummaryData))))
      .catch(ex => dispatch(getAccountSummaryFailed(ex)))
  }
}

//export function getAccountSummary() {

    //TODO: Create as service class   

    /* return async function (dispatch) {
        dispatch(getAccountSummaryPending());
        return await request({method: 'GET'})
                .then(summary => {
                    dispatch(getAccountSummarySuccess(summary))
                })
                .catch (err => {
                    dispatch(getAccountSummaryFailed({ data: undefined, error: SERVER_ERROR }));
                })
               
    } */
    
   /*  return async (dispatch, getState) => {
        const url = `${BASE_URL}${GET_ACCOUNT_SUMMARY}`;
        dispatch(getAccountSummaryPending());
        try {
            const response = await axios({
                method: 'GET',
                url,
                withCredentials: true
            });
            dispatch(getAccountSummarySuccess(response.data));
        } catch (error) {
            dispatch(getAccountSummaryFailed({ data: undefined, error: SERVER_ERROR }));
        }
    }; */
//}

/*
 Method : getAccountSummaryPending()
 Description:  This action fires prior to async call to show loading message for better user experience
 Return Type : Object   
*/

export function getAccountSummaryPending() {
    return {
        type: actionType.ACCOUNT_SUMMARY_PENDING
    };
}

/*
 Method : getAccountSummaryFailed()
 Description:  This action fires if async call to sent to server return status code other than 200
 Return Type : Object   
*/

export function getAccountSummaryFailed(error) {
    return {
        type: actionType.ACCOUNT_SUMMARY_FAILURE,
        payload: error
    };
}

/*
 Method : getAccountSummarySuccess()
 Description:  This action fires if async call to sent to server return status code 200
 Return Type : Object   
*/

export function getAccountSummarySuccess(summary) {
    return {
        type: actionType.ACCOUNT_SUMMARY_SUCCESS,
        payload: summary
    };
}

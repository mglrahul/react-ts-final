import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios';
import * as actions from '../__mocks__/Actions'
import React from 'react';
import types from '../../core/account-summary/ActionTypes'
import AccountOverview from '../../core/account-summary/component/AccountSummary';
import PlanList from '../../core/account-summary/component/PlantList'
import nock from 'nock'
import expect from 'expect' // You can use any testing library
import reducer from '../../core/account-summary/Reducers';

import { shallow } from 'enzyme';
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Mock Async Action for summary API Call', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('returns 200', () => {
    nock('http://example.com/')
      .get('/summary')
      .reply(200, {accountBalance: 10})

   
    const store = mockStore({ summary: null, loading:true })

    return store.dispatch(actions.getAccountSummary()).then((res) => {
      // return of async actions
     // console.log(res.payload.data.accountBalance);
      expect(res.payload.status).toEqual(200);
      expect(res.payload.data.accountBalance).toEqual(10);
    })
  })
  it('must haev accountBalance property', () => {
    nock('http://example.com/')
      .get('/summary')
      .reply(200, {accountBalance: 10})

    const store = mockStore({ summary: null, loading:true })

    return store.dispatch(actions.getAccountSummary()).then((res) => {
      // return of async actions
   //   console.log(res.payload.data.accountBalance);
      expect(res.payload.data.accountBalance).toEqual(10);
    })
  }) 
  
  
})

describe('Account Summary Reducer Suite', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      loading: true,
      summary: null
    });
  });

  it('should handle ACCOUNT_SUMMARY_SUCCESS', () => {
    expect(reducer({
      loading: true,
      summary: null
    }, {
        type: types.ACCOUNT_SUMMARY_SUCCESS,
        text: 'Run the tests'

      })).toBeTruthy();
  });
});

describe('Account Summary Component Suite', () => {

  /**  CONFIGURATION TO PRESET PROPS FOR CHILD COMPONENT */
  let propsPlanList;
  let mountedPlanListScreen;

  const PlanListScreen = () => {
    if (!mountedPlanListScreen) {
      mountedPlanListScreen = shallow(
        <PlanList {...propsPlanList} />
      );
      return mountedPlanListScreen;
    }
  };

  beforeEach(() => {
    propsPlanList = {
      plan: [
        {
          accountURL: 'http://',
          name: 'plan1',
          totalBalance: 10000.00,
          productId: 1
        },
        {
          accountURL: 'http://',
          name: 'plan2',
          totalBalance: 10000.00,
          productId: 3
        }
      ]
    };
    mountedPlanListScreen = undefined;
  });

  /**  CONFIGURATION TO PRESET PROPS FOR PARENT COMPONENT */

  let propsAccountSummary;
  let mountedAccountSummary;

  const AccountSummaryScreen = () => {
    if (!mountedAccountSummary) {
      mountedAccountSummary = shallow(
        <AccountOverview {...propsAccountSummary} />
      );
      return mountedAccountSummary;
    }
  };

  beforeEach(() => {
    propsAccountSummary = {

      accountSummaryData: {
        nonMonthlyAccounts: [{
          accountURL: 'http://',
          name: 'plan1',
          totalBalance: 10000.00,
          productId: 1
        },
        {
          accountURL: 'http://',
          name: 'plan2',
          totalBalance: 10000.00,
          productId: 3
        }],
        error: undefined,
        totalBalance: 10
      },
      accountSummaryLoaded: undefined,
      getAccountSummary: () => (undefined),

    };
    mountedAccountSummary = undefined;
  });

  /* xit('parent renders as expected', () => {
    const component = renderer.create(<AccountOverview accountSummaryData={'summary'} accountSummaryLoaded={true} getAccountSummary={() => store.dispatch(getAccountSummary())} />).toJSON();
    expect(component).toMatchSnapshot();
  }) */

  it('always render a section for parent component', () => {

    const section = AccountSummaryScreen().find('section');
    expect(section.length).toBeGreaterThan(0);
  });

  it('always render a li for child component', () => {

    const uls = PlanListScreen().find('li');
    expect(uls.length).toBeGreaterThan(0);
  });
});
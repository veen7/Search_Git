import React, { Component, addons } from 'react';
import { connect } from 'react-redux';
import { shallow } from 'enzyme';
import { Search } from './index';
import {makeSearchRequest} from './../../actions/search';
import { USER_SEARCH_REQUEST, USER_SEARCH_SUCCESS, USER_SEARCH_ERROR, SERVER_ERROR } from './../../actions/search';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)


function setup() {
  const props = {
    search: []
  }
  const enzymeWrapper = shallow(<Search {...props} />)

  return {
    props,
    enzymeWrapper
  }
}


describe('components', () => {
  describe('render', () => {
    it('render component', () => {
    	const { enzymeWrapper } = setup();
    	expect(enzymeWrapper.find('TextField').prop('hintText')).toEqual('Please enter your username');
    })
  })
})



describe('components', () => {
  describe('Dispatcher', () => {
    it('dispatch result in case of no repo', () => {
    	const expectedActions = [
		      { type: USER_SEARCH_REQUEST },
		      { type: USER_SEARCH_SUCCESS , data: []}		    ]
     	const store = mockStore({ search : [] })

     	return store.dispatch(makeSearchRequest({username : 'gautam'}))
	      .then(() => { 
	        expect(store.getActions()).toEqual(expectedActions)
	      })
    })
  })
})
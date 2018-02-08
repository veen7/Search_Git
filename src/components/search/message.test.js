import React, { Component, addons } from 'react';
import { connect } from 'react-redux';
import { shallow } from 'enzyme';
import Message from './message';


function setup() {
  const props = {
		search : [],
		error : "Not Found",
		username : 'praveen'
	}
	const enzymeWrapper = shallow(<Message {...props} />)

  return {
    props,
    enzymeWrapper
  }
}


describe('components', () => {
  	describe('render', () => {
	    it('render component', () => {
	    	 const { enzymeWrapper } = setup();
	    	 expect(enzymeWrapper).toMatchSnapshot();

  		})
	})
})

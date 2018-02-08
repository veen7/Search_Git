import React, { Component, addons } from 'react';
import { connect } from 'react-redux';
import { shallow } from 'enzyme';
import List from './list';


function setup() {
	const props = {
			search : []
	}
	const enzymeWrapper = shallow(<List {...props} />)

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


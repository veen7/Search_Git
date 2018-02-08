import React, { Component } from 'react';
import { connect } from 'react-redux';
import {makeSearchRequest} from './../../actions/search';
import {TextField} from 'material-ui';
import Message from './message';
import List from './list';

const style = {
	width : 600
}

export class Search extends Component {

	constructor(props){
		super(props);
		this.state = {
			username : null,
			activeIndex : 0,
			search : []
		}
	}

	componentDidMount() {
		document.onkeydown = (e) => {
		    switch(e.keyCode) {
		        case 38:
					this.onUpPress();
		            break;
		        case 13:
					this.onEnterPress();
		            break;
		        case 40:
					this.onDownPress();
					break;
				default:
					break;
		    }
		};
	}

	onUpPress = () => {
		if(this.props.search.search.items.length) {
			let activeIndex = this.state.activeIndex;
			if (activeIndex > 0) {
				activeIndex = activeIndex -1;
				this.setState({
					activeIndex: activeIndex
				});
			}
		}
	}

	onEnterPress = () => {
		if(this.props.search.search.items.length) {
			let activeIndex = this.state.activeIndex;
			window.open(this.props.search.search.items[activeIndex].html_url);
		}
	}

	onDownPress = () => {
		if(this.props.search.search.items.length) {
			let activeIndex = this.state.activeIndex;
			if (activeIndex < this.props.search.search.items.length-1) {
				activeIndex = activeIndex +1;
				this.setState({
					activeIndex: activeIndex
				});
			}
		}
	}

	handleSubmit = (e) => {
		this.props.dispatch(makeSearchRequest({
			username: e.target.value,
		}));
		return false;
	}

	handleUserNameChange = (e) => {
		let username = e.target.value;
  		 this.setState({username: username});
  		 this.handleSubmit(e);
	}

	render(){
		let search = this.props.search.search;
		let error = this.props.search.error;
		return (
			<div >
				<div>
					<h5>Github-Search</h5>
					<TextField hintText="Please enter your username" 
							   onChange={this.handleUserNameChange} 
							   style={style}/><br />
					<Message search={search} 
							 error={error} 
							 username={this.state.username} />
					<List search={search} username={this.state.username} activeIndex={this.state.activeIndex}/>
				</div>
			</div>
		);
	}
}



function mapStateToProps(state, ownProps){
	return {
		search : state.search
	}
}

export default connect(mapStateToProps)(Search);

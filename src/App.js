import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
              <div className="logo">Github-Search</div>
          </div>
          <div>
  					<p>This	assignment	consists	of	creating	a	search	field	with	autocomplete 	As	the	user	types,	github	user	will	show</p>
  				</div>
          <div className="App-intro">
              {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

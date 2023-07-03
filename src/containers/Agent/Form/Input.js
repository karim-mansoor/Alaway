import React, { Component } from 'react';

/**
 * Password Toggle Component
 * by Kevin Gimbel for https://kevingimbel.com/reactjs-tutorial-component-state
 */

/*
 * Here we create a Component that will output a password
 * Input fields and handle it's state
 */
var PasswordBox = React.createClass({
  // with getInitialState we can set the state
  // the Component is in when the site is rendered.
  // In this case the Input Type is password and the wording
  // of the trigger "button" is 'Show' 
  //
  // getInitialState returns an Object having as many properties
  // as we need. They'll be accessible via this.state.PROPERTYNAME,
  // e.g. this.state.type
  getInitialState: function() {
    return {
      type: 'password',
      wording: 'Show'
    }
  },
  // This little helper function will change the State of our
  // Component. It can be named anything, but I chose changeState
  // because it affects all available states.
  changeState: function() {
    var oldState = this.state.type;
    var isTextOrHide = (oldState === 'password');
    var newState = (isTextOrHide) ? 'text' : 'password';
    var newWord = (isTextOrHide) ? 'Hide' : 'Show';
    this.setState({
      type: newState,
      wording: newWord
    })
  },
  // As always, we need a render Function that returns 
  // the HTML of our component 
  render: function() {
    return (
      <div className="password">
        <label className="pasword__label"> Password 
          <input type={this.state.type}  defaultValue="$up3r_5ecur3Pa55w0rD" />
          <span className="password-trigger" onClick={this.changeState}>{this.state.wording}</span>
        </label>
      </div>
    )
  }
});

var LoginBox = React.createClass({
  render: function() {
    return (
      <div className="login-box">
        <h3>Super-duper awesome app</h3>
        <label> Username
        <input type="text" defaultValue="super_cool_user" />
        </label>
        <PasswordBox />
      </div>
    )
  }
})

React.render(<LoginBox />, document.querySelector('#app'));

export default LoginBox;
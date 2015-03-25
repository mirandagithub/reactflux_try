import React from 'react';
var AppActions = require('../actions/AppActions.react.js');


var GreetingBtn = React.createClass({
    render: function() {
	
	var classString, buttonText;

	if(this.props.isMorning) {
  		classString = 'btn btn-success btn-block';
  		buttonText = 'Good Morning';
  	} else {
  		classString = 'btn btn-primary btn-block';
  		buttonText = 'Good Night';
  	};

    return (
            <div> 
            	<button type='button'
            			className= {classString} 
            			onClick={this.props.handleClick}> {buttonText}
            	</button>
            </div>
        );
    }

});

module.exports = GreetingBtn;
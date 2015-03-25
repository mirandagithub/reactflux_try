
import React from 'react';
var AppActions = require('../actions/AppActions.react.js');
var AppStore = require('../stores/AppStore.react.js');
var GreetingBtn = require('../components/GreetingBtn.react.js');


function welcomeMessage(){
      return {message: AppStore.getMsg()};
}


var App = React.createClass({
    getInitialState: function(){
     return { message: 'Hello'};
    },

	componentWillMount: function(){
		console.log('componentWillMount');
        AppStore.addChangeListener(this._onChange);
    },

    _onChange: function(){
		console.log('change happened! lets prepare to re-draw');
        this.setState( welcomeMessage() );
    },

    handleClickAtMorning: function(){
        console.log('componenent called AppActions for Morning Message');
        AppActions.morningMessage('good morning to you too.');
    },

    handleClickAtNight: function(){
        console.log('componenent called AppActions for Night Message');
        AppActions.nightMessage('good night to you too.');
    },

    
    render: function() {
        return (
            <div>
                <h1> {this.state.message} </h1>
                <GreetingBtn handleClick={this.handleClickAtMorning} isMorning={true} />
                <GreetingBtn handleClick={this.handleClickAtNight} isMorning={false} />
            </div>
            );
    }

});


export default App;

console.log('begin WaitForStore');

var AppDispatcher = require('../dispatchers/AppDispatcher.react.js');
var AppStore = require('../stores/AppStore.react.js');

var AppConstants = require('../constants/AppConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change'; // broadcast change-s


var slowMsg = '';

function waitForMorning(){
 slowMsg = 'Get up now.';
};

function waitForNight(item){
  slowMsg = 'Stay up late.';
};



var WaitForStore = assign({}, EventEmitter.prototype, {
  emitChange: function(){
    console.log('WaitForStore emitChange');
    this.emit(CHANGE_EVENT);
  },

  /* 
emitter.emit(event[, arg1][, arg2][, ...])#
Execute each of the listeners in order with the supplied arguments.

Returns true if event had listeners, false otherwise.
  */

  addChangeListener: function(callback){
    console.log('component register addChangeListener in WaitForStore with callback(setState) func');
    this.on(CHANGE_EVENT, callback); //component to register the store
  },

  removeChangeListener: function(callback){

    this.removeListener(CHANGE_EVENT, callback);
  },


  getMsg: function(){
  console.log('get what\'s new from waitForStore');
  return slowMsg;
  },

/*
CityStore.dispatchToken = flightDispatcher.register(function(payload) {
  if (payload.actionType === 'country-update') {
    // `CountryStore.country` may not be updated.
    flightDispatcher.waitFor([CountryStore.dispatchToken]);
    // `CountryStore.country` is now guaranteed to be updated.

    // Select the default city for the new country
    CityStore.city = getDefaultCityForCountry(CountryStore.country);
  }
});
*/

  dispatchToken: AppDispatcher.register(function(payload){
   

    switch(payload.actionType){
      case AppConstants.MORNING_MESSAGE:
        console.log('WaitForStore will wait.');
        AppDispatcher.waitFor([AppStore.dispatchToken]);
        console.log('WaitForStore is doing actions for Morning Msg');
        waitForMorning();

        break;
      
      case AppConstants.NIGHT_MESSAGE:
        console.log('WaitForStore will wait.');
        AppDispatcher.waitFor([AppStore.dispatchToken]);
        console.log('WaitForStore is doing actions for Night Msg');
        waitForNight();

        break;

 
    }
    WaitForStore.emitChange();

    return true; // due to it's "promises"
  })
});

module.exports = WaitForStore;

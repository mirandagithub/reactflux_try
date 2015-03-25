console.log('begin AppStore');

var AppDispatcher = require('../dispatchers/AppDispatcher.react.js');
var AppConstants = require('../constants/AppConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change'; // broadcast change-s


var _welcomeMessage = '';

function _morningMsg(item){
 _welcomeMessage = 'Hola, ' + item;
};

function _nightMsg(item){
  _welcomeMessage = 'Chao, ' + item;
};




var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function(){
    console.log('AppStore emitChange');
    this.emit(CHANGE_EVENT);
  },

  /* 
emitter.emit(event[, arg1][, arg2][, ...])#
Execute each of the listeners in order with the supplied arguments.

Returns true if event had listeners, false otherwise.
  */

  addChangeListener: function(callback){
    console.log('component register addChangeListener in AppStore with callback(setState) func');
    this.on(CHANGE_EVENT, callback); //component to register the store
  },

  removeChangeListener: function(callback){
  console.log('removeChangeListener');

    this.removeListener(CHANGE_EVENT, callback);
  },


  getMsg: function(){
  console.log('get what\'s new from AppStore');
  return _welcomeMessage;
  },


  dispatcherIndex: AppDispatcher.register(function(payload){
   
    console.log('AppStore register callback in AppDispatcher');

    switch(payload.actionType){
      case AppConstants.MORNING_MESSAGE:
        console.log('AppStore is doing actions for Morning Msg');
        _morningMsg(payload.item);

        break;
      
      case AppConstants.NIGHT_MESSAGE:
      console.log('AppStore is doing actions for Night Msg');
        _nightMsg(payload.item);

        break;

 
    }
    AppStore.emitChange();

    return true; // due to it's "promises"
  })
});

module.exports = AppStore;

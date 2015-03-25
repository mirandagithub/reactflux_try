console.log('begin AppActions');

import AppConstants from '../constants/AppConstants.js';
import AppDispatcher from '../dispatchers/AppDispatcher.react.js';

var AppActions = {
  morningMessage: function(item){
    console.log("AppActions created actions: " + "morning Message and call AppDispatcher" );
    AppDispatcher.dispatch({
      actionType: AppConstants.MORNING_MESSAGE,
      item: item
    });
  },

  nightMessage: function(item){
    console.log("AppActions created actions: " + "night Message and call AppDispatcher");
    AppDispatcher.dispatch({
      actionType: AppConstants.NIGHT_MESSAGE,
      item: item
    });
  }

};


module.exports = AppActions;
// Info: Modal Provider
'use strict';

// React (Private Scope)
import React, {createContext, useContext} from 'react';

// Safe Area Provider wrap root app container
import {SafeAreaProvider, initialWindowMetrics, useSafeAreaInsets} from 'react-native-safe-area-context'

// Create Context for Modal
let ModalContext = createContext();


// Shared Dependencies (Managed my Main Entry Module)
var Lib;

// Configuration (Managed my Main Entry Module)
var CONFIG;


/////////////////////////// Module-Loader START ////////////////////////////////

/********************************************************************
Load dependencies and configurations

No params

@return nothing
*********************************************************************/
const loader = function(shared_libs, config){

  // Shared Dependencies (Managed my Main Entry Module)
  Lib = shared_libs;

  // Configuration (Managed my Main Entry Module)
  CONFIG = config;


};//////////////////////////// Module-Loader END /////////////////////////////////



///////////////////////////// Module Exports START /////////////////////////////
module.exports = function(shared_libs, config){

  // Run Loader
  loader(shared_libs, config);

  // Return Public Funtions of this module
  return Modal;

};//////////////////////////// Module Exports END //////////////////////////////


///////////////////////////Public Functions START///////////////////////////////
const Modal = { // Public functions accessible by other modules

  /********************************************************************
  Renader provider

  @Params {Component} children - render Component as Child

  @return {Component}  Provider wrapper
  *********************************************************************/
  renderModalProvider: function({children}){

    // Actions and data from useModal hooks
    let { actions, component, status } = Lib.UseModal();

    // Get Provider from context
    let {Provider} = ModalContext;

    return (
      <Provider value = {{actions}}>
        <SafeAreaProvider>
          {children}
          {
            status?
            component
            :
            null
          }
        </SafeAreaProvider>
      </Provider>
    );

  },


  /********************************************************************
  Create Hooke to access actions

  No Params

  @return {Function}  Actions
  *********************************************************************/
  createHooksForModal: function(){

    // Actions to show and hide modal
    let modal_actions = useContext(ModalContext);

    modal_actions = modal_actions.actions;

    // Return modal Actions
    return modal_actions;

  }

};///////////////////////////Public Functions END///////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _Modal = { // Private functions accessible within this modules only
// None
};//////////////////////////Private Functions END///////////////////////////////

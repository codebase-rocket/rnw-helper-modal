// Info: React helper modal library Actions
'use strict';

// React (Private Scope)
import React, {useState, useMemo} from  'react';

// Shared Dependencies (Managed my Main Entry Module)
var Lib;

// Configuration (Managed my Main Entry Module)
var CONFIG;


///////////////////////////// Module Exports START /////////////////////////////
module.exports = function(shared_libs, config){

  // Shared Dependencies (Managed my Main Entry Module)
  Lib = shared_libs;

  // Configuration (Managed my Main Entry Module)
  CONFIG = config;

  // Return Public Funtions of this module
  return UseModal;

};//////////////////////////// Module Exports END //////////////////////////////


//////////////////////////////// Component START ///////////////////////////////

/********************************************************************
Actions for Modal

Params- None

@return Actions and Modal Component
*********************************************************************/
const UseModal = function(){

  // Initialize default values, states
  const [component, set_component] = useState([]);
  const [ status, set_status] = useState(true);

  // Initialize actions required for modal
  const actions = useMemo(()=>({

    // Action to show modal
    show(data){
      // make data a component
      let Component = ()=> data;

      // set status as true
      set_status(true);

      // set data as Component in local state
      set_component((prev) => [...prev, <Component key = {_UseModal.generateModalId()}/>]);
    },

    // Action to hide modal
    hide(){
      // set_status as true
      set_status(true)

      // Remove last-in component forst
      set_component( // Filter Last Element of an Array ( Remove Top Component From Screen )
        (prev) => {
          return prev.filter((value , index)=>index !== prev.length-1);
        }
      )
    },

    // Action to hide all modal
    hideAll(){

      // remove all component
      set_component([])

      // se status as false
      set_status(false)
    }

  }), [])

  // Return Actions, Component and Status
  return {actions, component, status}

};/////////////////////////////// Component END ////////////////////////////////


////////////////////////// Private Functions START//////////////////////////////
const _UseModal = { // Private functions accessible within this modules only

  /********************************************************************
  Generate Modal random id

  Params- None

  @return {String} - Unique id
  *********************************************************************/
  generateModalId: function(){
    return Lib.Utils.generateRandomString(12);
  },

};////////////////////////// Private Functions END//////////////////////////////
// Info: React helper modal library to render modal globally
'use strict';

// Private Dependencies - Parts of same library (Managed by Loader)
var Modal;
var ModalProvider;
var useModal;


/////////////////////////// Module-Loader START ////////////////////////////////

/********************************************************************
Load dependencies and configurations

Param None

@return nothing
*********************************************************************/
const loader = function(lib, config){


  // Shared Dependencies (Managed by Loader)
  var Lib = {};

  // Shared Dependencies (Must be loaded in memory already)
  Lib.Utils = lib.Core.Utils;


  // Private Dependencies
  const UseModal = require("./lib/modalHooks")(Lib, config);

  // Initialize use modal in global object
  Lib.UseModal = UseModal;

  // Private Dependencies
  Modal = require('./lib/modalContext')(Lib, config);


  // Public functions
  ModalProvider = Modal.renderModalProvider;
  useModal = Modal.createHooksForModal;

};

//////////////////////////// Module-Loader END /////////////////////////////////



///////////////////////////// Module Exports START /////////////////////////////
// Export Public Funtions of this module
module.exports = function (shared_libs, config){

  // Run Loader
  loader(shared_libs, config);

  // Return Public Funtions of this module
  return{
    useModal,
    ModalProvider
  }

};//////////////////////////// Module Exports END //////////////////////////////

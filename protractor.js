(function(mod) {
  if (typeof exports == "object" && typeof module == "object") { // CommonJS
    return mod(require.main.require("../lib/infer"), require.main.require("../lib/tern"));
  }
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";
 
  tern.registerPlugin("protractor", function(server, options) {
    server._protractor = {
    };
	  
    return {
      defs : defs
    };
  });
  
  var defs = {
    "!name": "protractor"
  }

});
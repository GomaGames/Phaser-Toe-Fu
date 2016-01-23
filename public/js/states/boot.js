/*
 * Splash screen
 *   Act as preloader state
 * Start game once all assets are loaded
 */

// class constructor
ToeFu.Boot = function () {

};

ToeFu.Boot.prototype.preload = function(){

  // autoload each asset by type
  Object.keys(ToeFu.ASSETS).forEach(function(type){
    for( var asset in ToeFu.ASSETS[type] ){
      ToeFu.game.load[ type.toLowerCase() ](
        ToeFu.ASSETS[type][ asset ].name,
        ToeFu.ASSETS[type][ asset ].path,
        ToeFu.ASSETS[type][ asset ].width,
        ToeFu.ASSETS[type][ asset ].height,
        ToeFu.ASSETS[type][ asset ].frames
      );
    }
  });

};

ToeFu.Boot.prototype.create = function(){

  // switch to game state
  this.state.start(ToeFu.STATES.GAME);

};

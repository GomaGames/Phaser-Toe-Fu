/*
 * each asset is organized by type
 * each asset has struct
 *   {
 *     name : String
 *     path : String
 *     width : Integer @optional
 *     height : Integer @optional
 *     frames : Integer @optional
 *   }
 */
ToeFu.ASSETS = {
  // asset path much be a valid game.load.[x] method
  SPRITESHEET : {
    PLAYER : {
      name : 'player',
      path : 'assets/graphics/players_93x89.png',
      width : 93,
      height : 89,
      frames : 18,
      frames_per_row : 9 // split spritesheet by player/row
    }
  },
  IMAGE : {
    BG : {
      name : 'bg',
      path : 'assets/graphics/bg_1004x694.png',
      width : 1004,
      height : 694
    }
  }
};

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

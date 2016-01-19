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
      path : 'assets/graphics/snowball_sprite.png',
      width : 75,
      height : 68,
      frames : 11
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

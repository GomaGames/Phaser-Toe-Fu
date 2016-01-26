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
      path : 'assets/graphics/players_100x96.png',
      width : 100,
      height : 96,
      frames : 27,
      frames_per_row : 9 // split spritesheet by player/row
    }
  },
  IMAGE : {
    BG : {
      name : 'bg',
      path : 'assets/graphics/bg_900x600.jpg',
      width : 900,
      height : 600
    },
    PLAYER_SHADOW : {
      name : 'player_shadow',
      path : 'assets/graphics/shadow_50x10.png',
      width : 50,
      height : 10
    }
  }
};

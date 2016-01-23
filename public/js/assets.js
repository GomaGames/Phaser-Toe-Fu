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

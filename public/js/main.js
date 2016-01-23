window.ToeFu = {

  ASSETS : {},

  STAGE : {
    WIDTH : 900,
    HEIGHT : 600
  },

  STAGE_ID : "game",

  STATES : {
    BOOT : "Boot",
    GAME : "Game",
  }

};

window.onload = function(){
  ToeFu.game = new Phaser.Game(ToeFu.STAGE.WIDTH, ToeFu.STAGE.HEIGHT, Phaser.AUTO, ToeFu.STAGE_ID);
  ToeFu.game.state.add(ToeFu.STATES.BOOT, ToeFu.Boot);
  ToeFu.game.state.add(ToeFu.STATES.GAME, ToeFu.Game);
  ToeFu.game.state.start(ToeFu.STATES.BOOT);
};

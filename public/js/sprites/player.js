(function(){

  var SCALE = 2;

  var ANIMATIONS = {
    IDLE : {
      name : 'idle',
      frames : [0,1,2,3],
      fps : 5
    }
  };

  var FACING_FACTOR = {
    LEFT : -1,
    RIGHT : 1
  };

  var WALK_SPEED = 400; // pixels per frame
  var JUMP_HEIGHT = 1230;
  var DIVE_SPEED = 400;
  var DIVE_DISTANCE = 400; // horizontal "steps" per frame

  // sprite class constructor
  ToeFu.Player = function (game, name) {
    this.game = game;
    this.name = name;
    this.facing; // game state updates this
    this.is_diving = false;
    this.input_enabled = true; // ghetto, need a better mechanism for beginning of game, and on defeat
    this.acceleration = { x : 0, y : 0 };

    // super constructor call
    Phaser.Sprite.call(this, game, 0, 0, ToeFu.ASSETS.SPRITESHEET.PLAYER.name);

    // render settings
    this.scale.set(SCALE);
    this.smoothed = false;

    // center registration point
    this.anchor = { x : 0.5, y : 0.5 };

    // animations
    this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames);

    // initial animation state
    this.animations.play(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.fps, true);
  };

  ToeFu.Player.FACING = {
    LEFT : 'LEFT',
    RIGHT : 'RIGHT'
  };

  // extend Sprite prototype
  ToeFu.Player.prototype = Object.create(Phaser.Sprite.prototype, {
    constructor: {
      value: ToeFu.Player
    }
  });

  // Phaser callbacks
  ToeFu.Player.prototype.update = function(){

    // apply acceleration
    if( !this.is_diving && this.body.y < ToeFu.Game.FLOOR_Y ){
      // gravity
      this.body.velocity.y += this.acceleration.y;

    }

    // update facing
    this.scale.x = FACING_FACTOR[ this.facing ] * SCALE;
  };

  ToeFu.Player.prototype.victory = function(){
    console.log("victory");
    this.is_diving = false;

    // make animation

  };

  ToeFu.Player.prototype.defeat = function(){

    // stop all input
    this.input_enabled = false;
    this.body.velocity.x = 0;


    // make animation

  };

  // input actions
  ToeFu.Player.prototype.jump = function(){
    if(!this.input_enabled) return;

    // only allow jumping from the floor (not in mid air)
    if( this.body.velocity.y === 0 ){
      this.body.velocity.y = -JUMP_HEIGHT;
    }

  };
  ToeFu.Player.prototype.dive = function(){
    if(!this.input_enabled) return;

    if( this.body.y < ToeFu.Game.FLOOR_Y ){
      this.body.velocity.y = DIVE_SPEED;
      this.body.velocity.x = DIVE_DISTANCE * FACING_FACTOR[ this.facing ];
      this.is_diving = true;
    }else{
      this.body.velocity.y = 0;
      this.body.velocity.x = 0;
      this.is_diving = false;
    }

  };
  ToeFu.Player.prototype.dive_stop = function(){

    // reset velocity
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
    this.is_diving = false;

  };
  ToeFu.Player.prototype.step_left = function(){
    if(!this.input_enabled) return;

    this.body.velocity.x = -WALK_SPEED;

  };
  ToeFu.Player.prototype.step_right = function(){
    if(!this.input_enabled) return;

    this.body.velocity.x = WALK_SPEED;

  };
  ToeFu.Player.prototype.stop = function(){

    this.body.velocity.x = 0;

  };

})();


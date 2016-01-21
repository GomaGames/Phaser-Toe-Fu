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

  var WALK_SPEED = 4; // pixels per frame
  var JUMP_HEIGHT = 23;
  var DIVE_SPEED = 20;
  var DIVE_DISTANCE = 20; // horizontal "steps" per frame

  // sprite class constructor
  ToeFu.Player = function (game) {
    this.game = game;
    this.facing; // game state updates this
    this.velocity = { x : 0, y : 0 };
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

    // apply gravity
    if( this.y < ToeFu.Game.FLOOR_Y ){
      this.velocity.y += this.acceleration.y;
    }

    // update position
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    // update facing
    this.scale.x = FACING_FACTOR[ this.facing ] * SCALE;
  };


  // input actions
  ToeFu.Player.prototype.jump = function(){

    // only allow jumping from the floor (not in mid air)
    if( this.velocity.y === 0 ){
      this.velocity.y = -JUMP_HEIGHT;
    }

  };
  ToeFu.Player.prototype.dive = function(){

    if( this.y < ToeFu.Game.FLOOR_Y ){
      this.velocity.y = DIVE_SPEED;
      this.velocity.x = DIVE_DISTANCE * FACING_FACTOR[ this.facing ];
    }else{
      this.velocity.y = 0;
      this.velocity.x = 0;
    }

  };
  ToeFu.Player.prototype.dive_stop = function(){

    // reset velocity
    this.velocity = { x : 0, y : 0 };

  };
  ToeFu.Player.prototype.step_left = function(){

    this.velocity.x = -WALK_SPEED;

  };
  ToeFu.Player.prototype.step_right = function(){

    console.log("woaou");
    this.velocity.x = WALK_SPEED;

  };
  ToeFu.Player.prototype.stop = function(){

    this.velocity.x = 0;

  };

})();


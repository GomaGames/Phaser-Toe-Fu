(function(){

  var SCALE = 2;

  var ANIMATIONS = {
    IDLE : {
      name : 'idle',
      frames : [0,1,2,3],
      fps : 5
    }
  };

  var JUMP_HEIGHT = 23;

  // sprite class constructor
  ToeFu.Player = function (game) {
    this.game = game;
    this.velocity = { x : 0, y : 0 };
    this.acceleration = { x : 0, y : 0 };

    // super constructor call
    Phaser.Sprite.call(this, game, 0, 0, ToeFu.ASSETS.SPRITESHEET.PLAYER.name);

    // render settings
    this.scale.set(SCALE);
    this.smoothed = false;

    // animations
    this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames);

    // initial animation state
    this.animations.play(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.fps, true);
  };

  // extend Sprite prototype
  ToeFu.Player.prototype = Object.create(Phaser.Sprite.prototype, {
    constructor: {
      value: ToeFu.Player
    }
  });

  // Phaser callbacks
  ToeFu.Player.prototype.update = function(){
    this.y += this.velocity.y;
  };


  // input actions
  ToeFu.Player.prototype.jump = function(){

    // only allow jumping from the floor (not in mid air)
    if( this.velocity.y === 0 ){
      this.velocity.y = -JUMP_HEIGHT;
    }

  };
  ToeFu.Player.prototype.dive = function(){

  };
  ToeFu.Player.prototype.left = function(){

  };
  ToeFu.Player.prototype.right = function(){

  };

})();


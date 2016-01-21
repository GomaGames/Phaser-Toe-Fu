(function(){

  var GRAVITY = 0.96;

  var INITIAL_POSITIONS = [
    // player 1
    {
      x : 80
    },
    // player 2
    {
      x : 600
    }
  ];


  // class constructor
  ToeFu.Game = function () {

    this.player_1;
    this.player_2;
    this.input;

  };

  ToeFu.Game.FLOOR_Y = 400;

  ToeFu.Game.prototype.create = function(){

    // create and add players
    this.player_1 = new ToeFu.Player(this.game);
    this.player_2 = new ToeFu.Player(this.game);
    this.game.add.existing(this.player_1);
    this.game.add.existing(this.player_2);

    // position players
    this.player_1.x = INITIAL_POSITIONS[0].x;
    this.player_1.y = 100;
    this.player_2.x = INITIAL_POSITIONS[1].x;
    this.player_2.y = ToeFu.Game.FLOOR_Y;

    // initialize input handler
    this.input = new ToeFu.GameInput(this);

  };

  ToeFu.Game.prototype.update = function(){

    // for both players
    [this.player_1, this.player_2].forEach(function(player){

      // touching land or falling
      if(player.y > ToeFu.Game.FLOOR_Y){
        player.y = ToeFu.Game.FLOOR_Y;
        player.velocity.y = 0;
        player.acceleration.y = 0;
      }else{
        player.acceleration.y = GRAVITY;
      }

    });

    // set facing direction
    if( this.player_1.x < this.player_2.x ){
      this.player_1.facing = ToeFu.Player.FACING.RIGHT;
      this.player_2.facing = ToeFu.Player.FACING.LEFT;
    }else{
      this.player_1.facing = ToeFu.Player.FACING.LEFT;
      this.player_2.facing = ToeFu.Player.FACING.RIGHT;
    }

    // update our input handler
    this.input.update();

  };

  ToeFu.Game.prototype.shutdown = function(){
    // clean up our input handler
    this.input.shutdown();
  };

})();

(function(){

  var GRAVITY = 45;

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

    // enable ARCADE physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    // create and add players
    this.player_1 = new ToeFu.Player(this.game);
    this.player_2 = new ToeFu.Player(this.game);
    this.game.add.existing(this.player_1);
    this.game.add.existing(this.player_2);
    this.game.physics.enable(this.player_1, Phaser.Physics.ARCADE);
    this.game.physics.enable(this.player_2, Phaser.Physics.ARCADE);

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
      if(player.body.y > ToeFu.Game.FLOOR_Y){
        player.body.y = ToeFu.Game.FLOOR_Y;
        player.body.velocity.y = 0;
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

    // update physics
    this.game.physics.arcade.collide(this.player_1, this.player_2, players_collide, should_players_collide);
  };

  function players_collide(player_1, player_2){
    // check if both are diving
    if(player_1.is_diving && player_2.is_diving){
      // higher player wins
      if( player_1.body.y < player_2.body.y ){
        player_1.victory();
        player_2.defeat();
      }else{
        player_1.defeat();
        player_2.victory();
      }
    } else {
      // the player diving wins
      [player_1, player_2].forEach(function(player){
        if(player.is_diving){
          player.victory();
        } else {
          player.defeat();
        }
      });
    }

  }

  function should_players_collide(player_1, player_2){
    return [player_1, player_2].some(function(player){
      return player.is_diving;
    });
  }

  ToeFu.Game.prototype.shutdown = function(){
    // clean up our input handler
    this.input.shutdown();
  };

})();

# Game Development

## Steps to Build Toe-Fu

_These steps can go in almost any order, this is just a guide to the steps i took._

initial talking points
- OOP
    - access modifiers, encapsulation, SOC
    - Law of Demeter (least knowledge, loose coupling)
- Event Driven architecture vs. Signal Programming
    - event object => dataflow value
    - event bubbling (dom)
    - event propagation (capturing)
    - sync and async
- Phaser game engine
    - know what it provides

1. Setup Phaser game engine, source structure, and game bootup source files.
    - public/
        - index.html
            - create div#game
            - include phaser.min.js from cdnjs
            - include js/main.js
            - include js/states/boot.js
            - include js/states/game.js
    - js/
        - main.js
            - initialize window.ToFu object
                - ASSETS
                - STAGE
                - STAGE_ID
                - STATES
            - window.onload
                - instantiate Phaser.Game
                - add the 2 states
                - start the boot states
        - boot.js
            - constructor (empty)
            - .preload() (empty)
            - .create()
                - start *game* state
        - game.js
            - constructor (empty)
            - create() (empty)
            - update() (empty)
    - talking points
        - single global _ToeFu_ object
        - global settings in global site
        - accessing static vars
        - thin slice (console.log in game state create)
        - see phaser doc: Phaser.Game, Phaser.State
        - Phaser engine callbacks: preload, create, update, destroy
        - source file organization
1. (optional?) use .jshintrc
1. Create and add a single player sprite asset
    - talking points
        - sprite based animation
    - add a static class for assets
        - js/assets.js
            - ToeFu.ASSETS.SPRITESHEET.PLAYER
    - add a preloader (in boot state)
        - autoload all assets in .preload()
    - create a player class that extends Phaser.Sprite in js/sprites/player.js
        - private static
            - ANIMATIONS.IDLE
        - constructor(game, id)
            - super call
            - // render settings
            - // add animations
          - extend Phaser.Sprite prototype
    - add an instance of Player to Game state
        - in .create()
    - talking points
        - declarative programming
        - functional programming
        - private "static" vars via iife
        - es5 oop in the DevLeague standard
1. add second player
1. add keyboard input handler
    - add keyboard bindings
    - stub out actions
1. add Phaser Arcade Physics
    - adds .body
1. add walking
    - body.velocity
1. players should always face eachother
1. add gravity
1. add jumping
1. add diving
    - diving translates on x axis
1. add player collision detection
    - talking points
        - designing the win condition
1. add player.victory() and .defeat()
1. add Game.resolve_match()
1. add Game.flash(), display victory status
1. add "play again" action to game state
1. add bg image to Game state
1. add Player walk, jump, dive, and dead animations
1. player should stop auto-facing player when dead
1. enable world bounds
1. additional feature, allow jumping in mid air immediately after dive

import Phaser from "phaser";
import Scene1 from "./Scene1.js";
import Scene2 from "./Scene2.js";



const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 256,
  height: 272,
  scene: [Scene1, Scene2],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  }
};

const game = new Phaser.Game(config);



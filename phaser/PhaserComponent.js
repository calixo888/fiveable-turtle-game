import React, { useState, useEffect } from 'react';
import PlayScene from './PlayScene';
import PreloadScene from './PreloadScene';

let Phaser = null;
let config = null;
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  Phaser = require('phaser');

  config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 340,
    pixelArt: true,
    transparent: true,
    physics: {
      default: 'arcade',
      arcade: {
        debug: false
      }
    },
    scene: [PreloadScene, PlayScene],
    parent: 'game-content'
  };
}

function PhaserComponent() {
  const [game, setGame] = useState();

  useEffect(() => {
    if (config) {
      setGame(new Phaser.Game(config));
    }
  }, [config]);

  return Phaser ? <div id="game-content" /> : null;
};

export default PhaserComponent;
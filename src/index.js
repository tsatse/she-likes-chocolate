var Utils = require('utils');
var GameEngine = require('./game');
var gameDefinition = require('./game-definition.json');


var theGame = new GameEngine(
    document.getElementById('game-canvas'),
    gameDefinition    
);


theGame.start();

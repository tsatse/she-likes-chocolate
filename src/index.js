var Utils = require('./utils');
var GameEngine = require('./game');
var gameDefinition = require('./definition.json');

var override = require('./override-for-debug.json');

gameDefinition = Utils.merge(gameDefinition, override);

var theGame = new GameEngine(
    document.getElementById('game-canvas'),
    gameDefinition    
);


theGame.start();

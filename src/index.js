import { merge } from './utils';
import GameEngine from './game';
import gameDefinition from './definition.json';

import override from './override-for-debug.json';


const definition = { ...gameDefinition, ...override };

(new GameEngine(
    document.getElementById('game-canvas'),
    definition    
)).start();

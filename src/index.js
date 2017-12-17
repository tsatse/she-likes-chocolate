import { merge } from './utils';
import GameEngine from './game';
import gameDefinition from './definition';

import override from './override-for-debug';


const definition = { ...gameDefinition, ...override };

(new GameEngine(
    document.getElementById('game-canvas'),
    definition    
)).start();

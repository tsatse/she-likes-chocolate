import { merge } from './utils';
import Game from './game';
import gameDefinition from './definition';

import override from './override-for-debug';


const definition = { ...gameDefinition, ...override };

(new Game(
    document.getElementById('game-canvas'),
    definition    
)).start();

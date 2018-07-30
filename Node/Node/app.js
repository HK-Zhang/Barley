'use strict';
import { square, diag } from './lib';
const nodeEvent = require('./nodeEvent');
// import simple_timer_demo from './nodeEvent/simple_timer'

nodeEvent.simple_timer();
// console.log('Hello world');
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('myCustomEvent', () => {
  console.log('Custom event occurred!');
});
myEmitter.emit('myCustomEvent');
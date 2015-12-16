/**
 * Test polygon for Stores
 *
 */

import todoStore from './todoStore';

const line = '------------------------------------------------';


console.log('Mocking Todo Store..');

console.log('zero state');
console.log(todoStore.getState());

console.log(line);
console.log('dispatching ADD_TODO');
todoStore.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: '#1'
});
console.log(todoStore.getState());

console.log(line);
console.log('dispatching ADD_TODO');
todoStore.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: '#2'
});
console.log(todoStore.getState());

console.log(line);
console.log('dispatching TOGGLE_TODO');
todoStore.dispatch({
    type: 'TOGGLE_TODO',
    id: 0
});
console.log(todoStore.getState());

console.log(line);
console.log('dispatching SET_VISIBILITY_FILTER');
todoStore.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
});
console.log(todoStore.getState());

console.log(line);
console.log('√ Finished!');

//
// tests
//

import expect, { createSpy, spyOn, isSpy } from 'expect';
import deepFreeze from 'deep-freeze';

import todos from './todos';


//
// adding test

const testAddTodo = () => {
    console.log('Testing Todo Add...');

    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Demo item'
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Demo item',
            completed: false
        }
    ];

    //deepFreeze(stateBefore);
    //deepFreeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);

    console.log('√ Passed!');
};

testAddTodo();


//
// toggling test

const testToggleTodo = () => {
    console.log('Testing Todo Toggle...');

    const stateBefore = [
        {
            id: 0,
            text: 'Demo item',
            completed: false
        },
        {
            id: 1,
            text: 'Another demo item',
            completed: false
        }
    ];
    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Demo item',
            completed: false
        },
        {
            id: 1,
            text: 'Another demo item',
            completed: true
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);

    console.log('√ Passed!');
};

testToggleTodo();

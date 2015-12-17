/**
 * Test todos
 *
 */

import expect, { createSpy, spyOn, isSpy } from 'expect';

import todoItems from './todoItems';


//
// adding test

const testAddTodo = () => {
    console.log('Testing Todo Add...');

    const deepFreeze = require('deep-freeze');

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

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todoItems(stateBefore, action)
    ).toEqual(stateAfter);

    console.log('√ Passed!');
};

testAddTodo();


//
// toggling test

const testToggleTodo = () => {
    console.log('Testing Todo Toggle...');

    const deepFreeze = require('deep-freeze');

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
        todoItems(stateBefore, action)
    ).toEqual(stateAfter);

    console.log('√ Passed!');
};

testToggleTodo();

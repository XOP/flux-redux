/**
 * Test visibility filter
 *
 */

import expect, { createSpy, spyOn, isSpy } from 'expect';

import {SHOW_ALL, SHOW_COMPLETED, SET_VISIBILITY_FILTER} from '../../constants/appConstants';

import todoVisFilter from './todoVisFilter';


//
// adding test

const testVisFilter = () => {
    console.log('Testing Todo Visibility Filter...');

    const deepFreeze = require('deep-freeze');

    const stateBefore = SHOW_ALL;
    const action = {
        type: SET_VISIBILITY_FILTER,
        filter: SHOW_COMPLETED
    };
    const stateAfter = SHOW_COMPLETED;

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todoVisFilter(stateBefore, action)
    ).toEqual(stateAfter);

    console.log('√ Passed!');
};

testVisFilter();

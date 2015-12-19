/**
 * Test counter
 *
 */

import expect, { createSpy, spyOn, isSpy } from 'expect';
import counter from './counterApp';

import {INCREMENT, DECREMENT} from '../../constants/appConstants';


console.log('Testing Counter...');

expect(
    counter(0, {
        type: INCREMENT
    })
).toEqual(1);

expect(
    counter(1, {
        type: INCREMENT
    })
).toEqual(2);

expect(
    counter(2, {
        type: DECREMENT
    })
).toEqual(1);

expect(
    counter(1, {
        type: DECREMENT
    })
).toEqual(0);

expect(
    counter(9, {
        type: 'ELSE'
    })
).toEqual(9);

console.log('√ Passed!');

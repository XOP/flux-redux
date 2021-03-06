/**
 * Counter application
 *
 */

import {INCREMENT, DECREMENT} from '../../constants/appConstants';


const counter = (state = 0, action = null) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

export default counter;

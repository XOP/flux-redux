/**
 * Todos actions
 *
 */

import {ADD_TODO, TOGGLE_TODO} from '../../constants/appConstants';


/**
 * Todos switcher
 * @param state
 * @param action
 * @returns {*}
 */
const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };

        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            } else {
                return Object.assign({}, state, {
                    completed: !state.completed
                });
            }
            break;

        default:
            return state;
    }
};

/**
 * Todos switcher
 * @param state
 * @param action
 * @returns {*}
 */
const todoItems = (state = [], action = {}) => {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(todo(state, action));

        case TOGGLE_TODO:
            return state.map(t => todo(t, action));

        default:
            return state;
    }
};

export default todoItems;

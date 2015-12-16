/**
 * Todos application
 *
 * reducer
 */

import {combineReducers} from 'redux';

import todoItems from './todoItems';
import todoVisFilter from './todoVisFilter';


//
// combining reducers

//const todoApp = (state = {}, action = {}) => {
//    return {
//        todos: todoItems(
//            state.todos,
//            action
//        ),
//        visibilityFilter: todoVisFilter(
//            state.visibilityFilter,
//            action
//        )
//    };
//};

const todoApp = combineReducers({
    todoItems,      // todoItems: todoItems
    todoVisFilter   // todoVisFilter: todoVisFilter
});

export default todoApp;

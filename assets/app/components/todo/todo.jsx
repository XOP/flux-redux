/**
 * Todos
 *
 */

import './todo.scss';

import Store from 'stores/todoStore';
import {getVisibleItems} from './todoVisFilter';

import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from '../../constants/appConstants';

import TodoInput from './todoInput';
import TodoList from './todoList';
import TodoFilter from './todoFilter';


let todoId = 0;

/**
 * Item ID
 * @returns {number}
 */
function getId() {
    return todoId += 1;
}

/**
 * State update
 * @returns {{value: (*|any)}}
 */
function updateState() {
    // filter visible items using helper function
    const todoItems = getVisibleItems(
        Store.getState().todoItems,
        Store.getState().todoVisFilter
    );

    return {
        todoItems: todoItems,
        todoId: getId()
    };
}

module.exports = React.createClass({

    displayName: 'Todo',

    propTypes: {

    },

    getInitialState: function() {
        return updateState();
    },

    componentDidMount: function() {
        Store.subscribe(this._onChange);
    },

    componentWillUnmount: function() {
        Store.unsubscribe(this._onChange);
    },

    addNewItem: function(text) {
        Store.dispatch({
            type: ADD_TODO,
            text: text,
            id: this.state.todoId
        });
    },

    toggleItem: function(id) {
        Store.dispatch({
            type: TOGGLE_TODO,
            id: id
        });
    },

    filterItems: function(action) {
        Store.dispatch({
            type: SET_VISIBILITY_FILTER,
            filter: action
        });
    },

    _onChange: function() {
        this.setState(updateState());
    },

    render: function() {
        return (
            <div className="todo">
                <TodoInput
                    onButtonClick={this.addNewItem}
                    />
                <TodoList
                    onTodoClick={this.toggleItem}
                    todoItems={this.state.todoItems}
                    />
                <TodoFilter
                    onFilterClick={this.filterItems}
                    >
                    {
                        [
                            ['All', 'Completed', 'Active'],
                            'All'
                        ]
                    }
                </TodoFilter>
            </div>
        );
    }
});

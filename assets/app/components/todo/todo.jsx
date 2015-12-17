/**
 * Todos
 *
 */

import './todo.scss';

import Store from 'stores/todoStore';
import {getVisibleItems} from './todoVisFilter';

import TodoItem from './todoItem';
import Button from 'components/button/button';
import Filter from 'components/filter/filter';


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
        todoId: getId(),
        todoText: '' // clear the input value on enter
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

    addNewItem: function() {
        if (this.refs.todoTextInput.value !== '') {
            Store.dispatch({
                type: 'ADD_TODO',
                text: this.state.todoText,
                id: this.state.todoId
            });
        } else {
            console.info('Please input text in todo field!');
        }
    },

    inputText: function(evt) {
        this.setState({
            todoText: evt.target.value
        });
    },

    _onChange: function() {
        this.setState(updateState());
    },

    render: function() {
        return (
            <div className="todo">
                <div className="todo_input">
                    <input
                        className="input"
                        onChange={this.inputText}
                        placeholder="Add new todo"
                        ref="todoTextInput"
                        type="text"
                        value={this.state.todoText}
                        />
                    <Button
                        label="Add ToDo"
                        onClick={this.addNewItem}
                        />
                </div>
                <div className="todo_list">
                    {this.state.todoItems.map(todo =>
                        <TodoItem
                            completed={todo.completed}
                            id={todo.id}
                            key={todo.id}
                            text={todo.text}
                            />
                    )}
                </div>
                <div className="todo_filter">
                    <Filter>
                        {
                            [
                                ['All', 'Completed', 'Active'],
                                'All'
                            ]
                        }
                    </Filter>
                </div>
            </div>
        );
    }
});

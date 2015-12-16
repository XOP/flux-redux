/**
 * Todos
 *
 */

import './todo.scss';

import Store from 'stores/todoStore';
import Button from 'components/button/button';


let todoId = 0;

/**
 * Item ID
 * @returns {number}
 */
function getId() {
    return todoId++;
}

/**
 * State update
 * @returns {{value: (*|any)}}
 */
function updateState() {
    return {
        todoItems: Store.getState().todoItems,
        todoId: getId(),
        todoText: '' // clear the input value
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
                        <div
                            className="todo_item"
                            key={todo.id}
                            >
                            {todo.text}
                        </div>
                    )}
                </div>
            </div>
        );
    }
});

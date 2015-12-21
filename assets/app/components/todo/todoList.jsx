/**
 * Todos list
 *
 */

import TodoItem from './todoItem';


module.exports = React.createClass({

    displayName: 'TodoList',

    propTypes: {
        onTodoClick: React.PropTypes.func,
        todoItems: React.PropTypes.array
    },

    handleClick: function(evt) {
        // converting value to number
        this.props.onTodoClick(+evt.target.dataset.id);
    },

    render: function() {
        return (
            <div className="todo_list">
                {this.props.todoItems.map(todo =>
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        onClick={this.handleClick}
                        />
                )}
            </div>
        );
    }
});

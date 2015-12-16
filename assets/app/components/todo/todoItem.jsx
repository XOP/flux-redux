/**
 * Todos item
 *
 */

import './todo.scss';

import Store from 'stores/todoStore';


module.exports = React.createClass({

    displayName: 'TodoItem',

    propTypes: {
        completed: React.PropTypes.bool,
        id: React.PropTypes.number,
        text: React.PropTypes.string
    },

    getInitialState: function() {
        return {};
    },

    toggleItem: function() {
        Store.dispatch({
            type: 'TOGGLE_TODO',
            id: this.props.id
        });
    },

    render: function() {
        let klass = 'todo_item';

        if (this.props.completed) {
            klass += ' __completed';
        }

        return (
            <div
                className={klass}
                onClick={this.toggleItem}
                >
                {this.props.text}
            </div>
        );
    }
});

/**
 * Todos input
 *
 */

import Button from 'components/button/button';


module.exports = React.createClass({

    displayName: 'TodoInput',

    propTypes: {
        onButtonClick: React.PropTypes.func,
        onInputChange: React.PropTypes.func
    },

    getInitialState: function() {
        return {
            value: ''
        };
    },

    handleChange: function(evt) {
        this.setState({
            value: evt.target.value
        });
    },

    handleClick: function() {
        if (this.refs.todoTextInput.value !== '') {
            // pass text value
            this.props.onButtonClick(this.state.value);

            // clear the input field
            this.setState({
                value: ''
            });
        } else {
            console.warn('Please enter something');
        }
    },

    render: function() {
        return (
            <div className="todo_input">
                <input
                    className="input"
                    onChange={this.handleChange}
                    placeholder="Add new todo"
                    ref="todoTextInput"
                    type="text"
                    value={this.state.value}
                    />
                <Button
                    label="Add ToDo"
                    onClick={this.handleClick}
                    />
            </div>
        );
    }
});

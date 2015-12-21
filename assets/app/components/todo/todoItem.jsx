/**
 * Todos item
 *
 */


module.exports = React.createClass({

    displayName: 'TodoItem',

    propTypes: {
        completed: React.PropTypes.bool,
        id: React.PropTypes.number,
        onClick: React.PropTypes.func,
        text: React.PropTypes.string
    },

    render: function() {
        let klass = 'todo_item';

        if (this.props.completed) {
            klass += ' __completed';
        }

        return (
            <div
                className={klass}
                data-id={this.props.id}
                onClick={this.props.onClick}
                >
                {this.props.text}
            </div>
        );
    }
});

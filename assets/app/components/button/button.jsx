/**
 * Button
 *
 */

import './button.scss';


module.exports = React.createClass({

    displayName: 'Button',

    propTypes: {
        key: React.PropTypes.number,
        label: React.PropTypes.string,
        onClick: React.PropTypes.func,
        type: React.PropTypes.string
    },

    getInitialState: function() {
        return {};
    },

    render: function() {
        let klass = 'button';

        if (this.props.type) {
            klass += ' ' + klass + '__';
            klass += this.props.type;
        }

        return (
            <button
                className={klass}
                key={this.props.key}
                onClick={this.props.onClick}
                >
                {this.props.label}
            </button>
        );
    }

});

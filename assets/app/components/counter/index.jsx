/**
 * Counter
 *
 */

import './counter.scss';
import counter from './counter';


module.exports = React.createClass({

    displayName: 'Counter',

    propTypes: {
        key: React.PropTypes.number,
        label: React.PropTypes.number
    },

    getInitialState: function() {
        return {};
    },

    render: function() {
        return (
            <div
                className="counter"
                key={this.props.key}
                >
                <span className="counter_val">{this.props.label}</span>
            </div>
        );
    }

});

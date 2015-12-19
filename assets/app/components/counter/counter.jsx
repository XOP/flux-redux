/**
 * Counter
 *
 */

import './counter.scss';

import {INCREMENT, DECREMENT} from 'constants/appConstants';

import Store from 'stores/counterStore';
import Button from 'components/button/button';


/**
 * State update
 * @returns {{value: (*|any)}}
 */
function updateState() {
    return {
        value: Store.getState()
    };
}

module.exports = React.createClass({

    displayName: 'Counter',

    propTypes: {
        key: React.PropTypes.number,
        label: React.PropTypes.number
    },

    getInitialState: function() {
        return counterState();
    },

    componentDidMount: function() {
        Store.subscribe(this._onChange);
    },

    onIncrement: function() {
        Store.dispatch({
            type: INCREMENT
        });
    },

    onDecrement: function() {
        Store.dispatch({
            type: DECREMENT
        });
    },

    _onChange: function() {
        this.setState(updateState());
    },

    render: function() {
        return (
            <div
                className="counter"
                key={this.props.key}
                >
                <h2 className="counter_label">{this.state.value}</h2>
                <div className="counter_buttons">
                    <Button
                        label="+"
                        onClick={this.onIncrement}
                        type="small"
                        />
                    &nbsp;
                    <Button
                        label="–"
                        onClick={this.onDecrement}
                        type="small"
                        />
                </div>
            </div>
        );
    }

});

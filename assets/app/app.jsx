/**
 * Application
 *
 */

import 'normalize.css/normalize.css';
import './app.scss';

import Button from 'components/button/button';
import Counter from 'components/counter/index';

import Store from 'components/counter/store';


function updateState() {
    return {
        counter: Store.getState()
    };
}

module.exports = React.createClass({

    displayName: 'Application',

    getInitialState: function() {
        return updateState();
    },

    componentDidMount: function() {
        Store.subscribe(this._onChange);
    },

    componentWillUnmount: function() {

    },

    _onChange: function() {
        this.setState(updateState());
    },

    counterUpdate: function() {
        Store.dispatch({
            type: 'INCREMENT'
        });
    },

    render: function() {
        return (
            <div className="main">
                <div className="container">
                    <Counter label={this.state.counter} />
                </div>
                <div className="container">
                    <Button label="Click and count" onClick={this.counterUpdate} />
                </div>
            </div>
        );
    }
});

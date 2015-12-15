/**
 * Application
 *
 */

import 'normalize.css/normalize.css';
import './app.scss';

import Button from 'components/button/button';


module.exports = React.createClass({

    displayName: 'Application',

    getInitialState: function() {
        return {};
    },

    componentDidMount: function() {

    },

    componentWillUnmount: function() {

    },

    _onChange: function() {

    },

    render: function() {
        return (
            <div className="main">
                <div className="container">
                    <h2>0</h2>
                </div>
                <div className="container">
                    <Button label="Click and count" />
                </div>
            </div>
        );
    }
});

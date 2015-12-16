/**
 * Application
 *
 */

import 'normalize.css/normalize.css';
import './app.scss';

import Todo from 'components/todo/todo';


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
                    <Todo />
                </div>
            </div>
        );
    }
});

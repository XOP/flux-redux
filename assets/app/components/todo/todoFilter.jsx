/**
 * Todos filter
 *
 */

import Store from 'stores/todoStore';

import {SET_VISIBILITY_FILTER} from '../../constants/appConstants';

import Filter from 'components/filter/filter';


module.exports = React.createClass({

    displayName: 'TodoFilter',

    propTypes: {
        children: React.PropTypes.array
    },

    componentDidMount: function() {
        this.unsubscribe = Store.subscribe(() =>
            this.forceUpdate()
        );
    },

    componentWillUnmount() {
        this.unsubscribe();
    },

    handleClick: function(action) {
        Store.dispatch({
            type: SET_VISIBILITY_FILTER,
            filter: action
        });
    },

    render: function() {
        return (
            <div className="todo_filter">
                <Filter onFilterClick={this.handleClick}>
                    {this.props.children}
                </Filter>
            </div>
        );
    }
});

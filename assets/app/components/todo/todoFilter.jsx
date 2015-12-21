/**
 * Todos filter
 *
 */

import Filter from 'components/filter/filter';


module.exports = React.createClass({

    displayName: 'TodoFilter',

    propTypes: {
        children: React.PropTypes.array,
        onFilterClick: React.PropTypes.func
    },

    render: function() {
        return (
            <div className="todo_filter">
                <Filter
                    onFilterClick={this.props.onFilterClick}
                    >
                    {this.props.children}
                </Filter>
            </div>
        );
    }
});

/**
 * Button
 *
 */

import './filter.scss';


module.exports = React.createClass({

    displayName: 'Filter',

    propTypes: {
        children: React.PropTypes.array,
        onFilterClick: React.PropTypes.func
    },

    getInitialState: function() {
        // filter active item and set initial state
        const match = this.props.children[1];
        let active = 0;

        this.props.children[0].filter((item, i) => {
            if (item === match) {
                active = i;
            }
        });

        return {
            items: this.props.children[0],
            active: active
        };
    },

    toggleActive: function(evt) {
        // short way to set desired action
        const action = 'SHOW_' + evt.target.innerText.toUpperCase();

        // pass item id to filter active element
        this.setState({
            active: parseInt(evt.target.dataset.key, 10)
        },
            function() {
                this.props.onFilterClick(action);
            }.bind(this)
        );
    },

    render: function() {
        return (
            <div className="filter">
                {this.state.items.map((item, i) =>
                    <div
                        className="filter_i"
                        key={i}
                        >
                        <span
                            className={this.state.active === i ? 'filter_a __active' : 'filter_a'}
                            data-key={i}
                            onClick={this.toggleActive}
                            >
                            {item}
                        </span>
                    </div>
                )}
            </div>
        );
    }
});

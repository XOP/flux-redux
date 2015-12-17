/**
 * Todos visibility filter
 *
 */


/**
 * Visible items filter
 * @param todos
 * @param filter
 * @returns {*}
 */
export const getVisibleItems = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;

        case 'SHOW_COMPLETED':
            return todos.filter(
                t => t.completed
            );

        case 'SHOW_ACTIVE':
            return todos.filter(
                t => !t.completed
            );

        default:
            return todos;
    }
};

/**
 * Visible items reducer
 * @param state
 * @param action
 * @returns {*}
 */
const todoVisFilter = (
    state = 'SHOW_ALL',
    action = {}
) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;

        default:
            return state;
    }
};

export default todoVisFilter;

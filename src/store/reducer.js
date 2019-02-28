/**
 * Initial State
 */
const initialState = {
  message: 'Hello',
};

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'DO_SOMETHING':
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const doSomething = message => ({
  type: 'DO_SOMETHING',
  message,
});

/**
 * Export
 */
export default reducer;

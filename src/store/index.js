/**
 * Npm import
 */
import { createStore } from 'redux';

/**
 * Local import
 */
import reducer from 'src/store/reducer';

/**
 * Code
 */
const store = createStore(reducer);

/**
 * Export
 */
export default store;

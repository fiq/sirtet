import * as redux from 'redux';

/**
 * Creates and configures a redux store
 * @return {Store}
 */
export function createStore() {
    const initialState = {};
    const store = redux.createStore(()=>{}, initialState) 
    return store;
}

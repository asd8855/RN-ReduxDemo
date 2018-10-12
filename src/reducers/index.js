'use strict'

import { combineReducers } from 'redux';
import counter from './counterReduce';

const rootReducer = combineReducers({
    counter: counter
});

export default rootReducer;
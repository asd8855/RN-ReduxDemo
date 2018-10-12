import *as types from '../constants/counterType';
export function decrement() {
    return {
        type: types.DECREMENT
    }
}

export function increment() {
    return {
        type: types.INCREMENT
    }
}
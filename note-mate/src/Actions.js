export const NEW_LIST = 'NEW_LIST';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const addList = (list) => {
    return {
        type: NEW_LIST,
        payload: list
    }
}

export const toggleComplete = (index) => {
    return {
        type: TOGGLE_COMPLETE,
        payload: index
    }
}
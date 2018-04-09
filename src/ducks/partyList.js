const initialState = {
    list: ['Batman']
}
const ADD_GUEST = 'ADD_GUEST';
const DELETE = 'DELETE';

export function addGuest(name) {
    return {
        type: ADD_GUEST,
        payload: name
    }
}
export function removeGuest(index){ 
    return {
        type: DELETE,
        payload: index
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_GUEST:
            return Object.assign({}, state, {list: [...state.list, action.payload]})
        case DELETE:
            let updatedList = state.list.filter((guest, i) => {
                return i !== action.payload
            })
            return {
                list: updatedList
            }
        default:
            return state;
    }
}
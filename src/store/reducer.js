import {defaultArray} from "../DefaultArray";

const defaultState = {users: [...defaultArray]};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return {...state, users: [...state.users.map(user => user.id === action.payload.id ? {
                    id: action.payload.id,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    age: action.payload.age,
                    email: action.payload.email
                } : user)]}
        default:
            return state
    }
}
import { actionTypes } from "../Actions/typeActionsApp/type";

export const initialStateApp = {
    user: null,
}

const reducerApp = (state, action) => {
    switch (action.type) {
        case actionTypes.USER_AUTH:
            console.log('ACCION', action)
            return {
                ...state,
                user: action.payload
            }
        default: state
    }

}

export default reducerApp
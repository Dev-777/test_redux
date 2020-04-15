import {initialState} from "./initialState";

export let reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case "Arsen":
            state.name = "Tamarik";
            return state;
        default:
            return state;
            break;
    }
};
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"

const defaultState = {items: [], viewMode: 'All'}

function todoReducer(state = defaultState, action: any) {
    switch (action.type) {
        case 'change_view_mode':
            return {...state, viewMode: action.viewMode};
        case 'add_item':
            return {...state, items: [...state.items, action.item]};
        case 'delete_item':
            return {
                ...state,
                items: state.items.map((item: any) => {
                    if (item.message === action.item.message) {
                    } else {
                        return item
                    }
                })
            }
        case 'change_status':
            return {
                ...state,
                items: state.items.map((item: any) => {
                    if (item.message === action.item.message) {
                        return {message: item.message, status: !item.status}
                    } else {
                        return item
                    }
                })
            };
        default:
            return state;
    }
}

export function changeViewModeActionCreator(viewMode: string) {
    return {
        type: "change_view_mode",
        viewMode
    }
}

export function addItem(item: any) {
    return {
        type: "add_item",
        item
    }
}


export function deleteItem(item: any) {
    return {
        type: "delete_item",
        item
    }
}

export function updateStatus(item: any) {
    return {
        type: "change_status",
        item
    }
}

// @ts-ignore
export const store = createStore(todoReducer,composeWithDevTools());

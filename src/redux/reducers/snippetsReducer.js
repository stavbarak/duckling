/* import _ from 'lodash';
 */
import {
    DATA_FETCHED,
    CLEAR_DATA_ITEM,
    DELETE_CURRENT_ITEM,
    ITEM_FETCHED,
    SWITCH_TAB
  } from 'redux/actions/types';

const InitialState = {
    data: [],
    loaded: false,
    currentItem: null,
    currentTab: 'description'
}

const snippetsReducer = (state = InitialState, action) => {
    switch(action.type) {
        case DATA_FETCHED:
            return {
                ...state,
                data: action.payload,
                loaded: true
            }
        case ITEM_FETCHED:
            return {
                ...state,
                currentItem: action.payload
            }    

        case CLEAR_DATA_ITEM:
            return {
                ...state,
                currentItem: null
            }

        case DELETE_CURRENT_ITEM:
            const newData = [...state.data].filter((elem) => {
                return elem.snipId !== action.payload;
            });
            return {
                ...state,
                data: newData
            }    
        case SWITCH_TAB:
            return {
                ...state,
                currentTab: action.payload
            }      
        default:
            return state;
    }
}

export default snippetsReducer;
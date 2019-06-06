/* import _ from 'lodash';
 */
import {
    DATA_FETCHED,
    CLEAR_DATA_ITEM,
    DELETE_CURRENT_ITEM,
    MAKE_CURRENT,
    ITEM_FETCHED,
    ADD_COMMENT,
    /* CLEAR_CURRENT_COMMENT,
    SAVE_QUICK_COMMENT */
  } from 'redux/actions/types';

const InitialState = {
    data: [],
    loaded: false,
    currentItem: null,
    currentComment: ''
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
        /* case SAVE_QUICK_COMMENT:
            return {
                ...state,
                currentComment: action.payload
            }  */
        /* case CLEAR_CURRENT_COMMENT:
            return {
                ...state,
                currentComment: ''
            }   */  

        case DELETE_CURRENT_ITEM:
            const newData = [...state.data].filter((elem) => {
                return elem.snipId !== action.payload;
            });
            return {
                ...state,
                data: newData
            }   
            
        case MAKE_CURRENT:
            return {
                ...state,
                currentItem: action.payload
            }   
            
        case ADD_COMMENT: 

            const newItem = {...state.currentItem};
            newItem.comments.push(action.payload);
            console.log(newItem)
            return {
                ...state,
                currentItem: newItem
            }    
        default:
            return state;
    }
}

export default snippetsReducer;
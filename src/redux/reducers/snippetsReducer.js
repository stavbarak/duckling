/* import _ from 'lodash';
 */
import {
    DATA_FETCHED,
    CLEAR_DATA_ITEM,
    DELETE_CURRENT_ITEM,
    MAKE_CURRENT,
    ITEM_FETCHED,
    ADD_COMMENT,
    DELETE_COMMENT,
    ADD_TAG,
    DELETE_TAG,
    ORDER_NOTES_BY_DATE,
    /* FILTER_NOTES_BY_LABEL, */
    NOTES_FILTERED
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

        case ORDER_NOTES_BY_DATE:
            const dataByDate = [...state.data].sort((a, b) => {
                return a.dateSnipped > b.dateSnipped ? 1 : -1;
            });
            
            return {
                ...state,
                data: dataByDate
            }    
        case NOTES_FILTERED:

            return {
                ...state,
                data: action.payload
            }  

        /* case FILTER_NOTES_BY_LABEL:
            const dataByLabel = [...state.data].filter(item => item.labels.includes(action.payload))        
            return {
                ...state,
                data: dataByLabel
            }   */   
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
            
        case MAKE_CURRENT:
            return {
                ...state,
                currentItem: action.payload
            }   
            
        case ADD_COMMENT: 
            const newItemFromAddComment = Object.assign({}, state.currentItem)
            const { comments } = state.currentItem;
            newItemFromAddComment.comments = [...comments, action.payload];

            return {
                ...state,
               currentItem: newItemFromAddComment
            }    

        case DELETE_COMMENT:
            const newItemFromDeleteComment = Object.assign({}, state.currentItem);
            newItemFromDeleteComment.comments = action.payload;

            return {
                ...state, currentItem: newItemFromDeleteComment
            }    

        case ADD_TAG:
            const newItemFromAddTag = Object.assign({}, state.currentItem);
            const { tags } = state.currentItem;
            newItemFromAddTag.tags = [...tags, action.payload];
            console.log(newItemFromAddTag)
            return {
                ...state,
                currentItem: newItemFromAddTag
            }

        case DELETE_TAG:
            const newItemFromDeleteTag = Object.assign({}, state.currentItem);
            newItemFromDeleteTag.tags = action.payload;
            return {
                ...state, currentItem: newItemFromDeleteTag
            }      
        default:
            return state;
    }
}

export default snippetsReducer;
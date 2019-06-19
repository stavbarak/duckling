import fetch from 'cross-fetch'
import {
  DATA_FETCHED,
  CLEAR_DATA_ITEM,
  ITEM_FETCHED,
  ITEM_DETAILS_FETCHED,
  DELETE_CURRENT_ITEM,
  MAKE_CURRENT,
  ADD_COMMENT,
  DELETE_COMMENT,
  ADD_TAG,
  DELETE_TAG,
  ORDER_NOTES_BY_DATE,
  FILTER_NOTES_BY_LABEL,
  
  SIGN_IN,
  SIGN_OUT
} from './types';


const API_URL = 'http://www.mocky.io/v2/5d0a21d33400001229d83383';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export async function fetchData(dispatch) {
  return await fetch(API_URL, {
      method: 'GET'
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then((json) => {
        dispatch(dataFetched(json))
        dispatch(orderNotesByDate(json))

      }
       
      )
}


export function fetchDataItem(id) {   
  return async function (dispatch) {
    return await fetch(API_URL, {
      method: 'GET'
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => {
        const currentItem = json.find((item) => {
            return item.snipId === id ;
          });
        dispatch(itemfetched(currentItem))
        })
  }
}


export function deleteDataItem(id) {   
  return async function (dispatch) {
    return await fetch(API_URL, {
      method: 'GET'
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(dispatch(deleteCurrentItem(id)))
  }
}

export function deleteCurrentItem(id) {
  return {
    type: DELETE_CURRENT_ITEM,
    payload: id
  } 
}


export function clearDataItem(currentItem) {
  return {
    type: CLEAR_DATA_ITEM,
    payload: currentItem
  }
}

export function itemDetailsFetched() {
  return {
    type: ITEM_DETAILS_FETCHED
  }
}

export function itemfetched(currentItem) {
  return {
    type: ITEM_FETCHED,
    payload: currentItem
  }
}

export const dataFetched = (data) => {
    return {
        type: DATA_FETCHED,
        payload: data
    }
}


export const makeCurrent = (currentItem) => {
  return {
    type: MAKE_CURRENT,
    payload: currentItem
  }
}

export const saveComment = (comment, id) => {
  return async function (dispatch) {
    return await fetch(API_URL, {
      method: 'GET'
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => {
        
        const currentItem = json.find((item) => {
          console.log(id)
            return item.snipId === id ;
          });
        dispatch(makeCurrent(currentItem))
        console.log(currentItem)
        dispatch(addComment(comment))
        })
  }
}


export const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment
  }
}


export const deleteComment = (comments) => {
  return {
    type: DELETE_COMMENT,
    payload: comments
  }
} 


export const addTag = (tag) => {
  return {
    type: ADD_TAG,
    payload: tag
  }
}

export const deleteTag = (tags) => {
  return {
    type: DELETE_TAG,
    payload: tags
  }
}

export const orderNotesByDate = (data) => {
  return {
      type: ORDER_NOTES_BY_DATE,
      payload: data
  }
}

export const filterNotesByLabel = (labels) => {
  return {
    type: FILTER_NOTES_BY_LABEL,
    payload: labels
  }
}

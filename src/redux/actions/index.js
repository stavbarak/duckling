import fetch from 'cross-fetch'
import {
  DATA_FETCHED,
  CLEAR_DATA_ITEM,
  ITEM_FETCHED,
  ITEM_DETAILS_FETCHED,
  DELETE_CURRENT_ITEM,
  SWITCH_TAB,
  SIGN_IN,
  SIGN_OUT
} from './types';


const API_URL = 'http://www.mocky.io/v2/5cf4df2e2f00003a0e4f0503';

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
      .then(json =>
        dispatch(dataFetched(json))
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
          //console.log(currentItem)
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

/*   export function deleteDataItem(id, callback){

    const request = axios.delete(`${API_URL}/${id}`)
        .then(() => callback());

    return {
        type: DELETE_TASK,
        payload: id
    }
} */

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

export const switchTab = (tab) => {
  return {
      type: SWITCH_TAB,
      payload: tab
  }
}

import fetch from 'cross-fetch'
import {
  DATA_FETCHED,
  CLEAR_DATA_ITEM,
  ITEM_FETCHED,
  ITEM_DETAILS_FETCHED,
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
              return item.itemId === id ;
            });
          dispatch(itemfetched(currentItem))
          console.log(currentItem)
          //dispatch(fetchItemDetails(currentItem))
          })
    }
  }

  export function clearDataItem() {
    return {
      type: CLEAR_DATA_ITEM
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

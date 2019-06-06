import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import snippetsReducer from 'redux/reducers';
import authReducer from 'redux/reducers';
import thunk from 'redux-thunk';

const reducer = {
  snippets: snippetsReducer,
  auth: authReducer
}

const store = configureStore({
  reducer,
  middleware: [thunk, ...getDefaultMiddleware()]
})

export default store
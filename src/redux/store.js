import {combineReducers, createStore, applyMiddleware} from 'redux'
import ImageReducer from './reducers/imageReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    images: ImageReducer,
})

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk))

export default configureStore 
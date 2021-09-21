import {
    SET_IMAGES,
    SET_IMAGES_LOADING,
    SET_IMAGES_ERROR,
    SET_LIKED_IMAGES,
    CLEAR_LIKED_IMAGES,
    RESET
} from '../actionTypes/authenticationActionTypes'

const defaultState = {
    images: null,
    liked_images: null,
    loading: false,
    error: null,
}

const AuthReducer = (state = defaultState, action) => {
    switch (action.type){
        case SET_IMAGES:
            return {...state, images: action.images}
        case SET_LIKED_IMAGES:
            return {...state, liked_images: action.liked_images}
        case CLEAR_LIKED_IMAGES:
            return {...state, liked_images: action.liked_images}
        case SET_IMAGES_LOADING:
            return {...state, loading: action.loading}
        case SET_IMAGES_ERROR:
            return {...state, error: action.error}
        case RESET:
            return defaultState
        default:
            return state
    }
}

export default AuthReducer
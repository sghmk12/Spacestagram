import {
    SET_IMAGES,
    SET_IMAGES_LOADING,
    SET_IMAGES_ERROR,
    SET_LIKED_IMAGES,
    CLEAR_LIKED_IMAGES,
    RESET
} from '../actionTypes/authenticationActionTypes'

export const setImages = (images) => ({
    type: SET_IMAGES,
    images
})

export const setImagesLoading = (loading) => ({
    type: SET_IMAGES_LOADING,
    loading
})

export const setImagesError = (error) => ({
    type: SET_IMAGES_ERROR,
    error    
})

export const setLikedImages = (liked_images) => ({
    type: SET_LIKED_IMAGES,
    liked_images
})

export const clearLikedImages = () => ({
    type: CLEAR_LIKED_IMAGES
})

export const reset = () => ({
    type: RESET
})
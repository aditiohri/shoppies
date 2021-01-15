const FETCH_MOVIE_INIT = "FETCH_MOVIE_INIT";
const FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS";
const FETCH_MOVIE_ERROR = "ERROR";

export const fetchMovieTitle = (searchTitle) => {
    return {
        type: FETCH_MOVIE_INIT,
        searchTitle: searchTitle
    }
}

export const fetchMovieSuccess = (results) => {
    return {
        type: FETCH_MOVIE_SUCCESS,
        results: results
    }
}

export const fetchMovieError = (error) => {
    return {
        type: FETCH_MOVIE_ERROR,
        error: error
    }
}

const initialState = {
    results: [],
    loading: true,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_INIT:
            return // dispatch to saga
        case FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                results: action.results,
                loading: false
            }
        case FETCH_MOVIE_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
}

export default reducer;
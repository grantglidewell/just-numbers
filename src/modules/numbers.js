const initialState = {
  results: [1, 2, 3],
  goal: false,
  name: 'string',
  newNumber: 500
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_RESULTS':
      return state
    case 'FETCHING_RESULTS_SUCCESS':
      return action.results
    case 'FETCHING_RESULTS_ERROR':
      return action.error
    case 'ADD_NUMBER':
      return state
    case 'SUBMIT_NUMBER':
      return state
    default:
      return state
  }
}

export const addNumber = () => {
  return dispatch => {
    dispatch({
      type: 'ADD_NUMBER'
    })

    dispatch({
      type: 'SUBMIT_NUMBER'
    })
  }
}


export const fetchResults = () => {
  return dispatch => {
    dispatch({
      type: 'FETCHING_RESULTS'
    })

    return fetch('urltofetch.from')
      .then(data => {
        const results = data.data
        dispatch({
          type: 'FETCH_RESULTS_SUCCESS',
          results
        })
      })
      .catch(error => {
        dispatch({
          type: 'FETCH_RESULTS_errorOR',
          error
        })
      })
    
  }
}
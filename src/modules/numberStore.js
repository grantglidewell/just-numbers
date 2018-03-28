const initialState = {
  results: [1, 2, 3],
  goal: false,
  name: 'Numbers',
  diff: 50,
  number: 500
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_RESULTS':
      return state
    case 'FETCHING_RESULTS_SUCCESS':
      return action.results
    case 'FETCHING_RESULTS_ERROR':
      return action.error
    case 'UPDATE_PREFS':
      return {...state, ...action.payload}
    case 'INC_NUMBER':
      const incNumber = state.number + state.diff
      return {...state, number: incNumber}
    case 'DEC_NUMBER':
    const decNumber = state.number - state.diff
    return {...state, number: decNumber}
    case 'INPUT_NUMBER':
      return {...state, number: action.number}
    case 'SUBMIT_NUMBER':
      return state
    default:
      return state
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
          type: 'FETCH_RESULTS_ERROR',
          error
        })
      })
    
  }
}
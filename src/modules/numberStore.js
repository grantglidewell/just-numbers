const initialState = {
  results: [
    { total: 1250,
      date: 0
    },
    { total: 2800,
      date: 1
    },
    { total: 2300,
      date: 2
    },
    { total: 1850,
      date: 3
    },
    { total: 2250,
      date: 4
    },
    { total: 1340,
      date: 5
    },
    { total: 1340,
      date: 6
    },
    { total: 1340,
      date: 7
    }
  ],
  goal: "false",
  limit: "true",
  total: 2400,
  name: "Numbers",
  diff: 50,
  number: 500
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_RESULTS":
      return state;
    case "FETCHING_RESULTS_SUCCESS":
      return action.results;
    case "FETCHING_RESULTS_ERROR":
      return action.error;
    case "SAVING_PREFS":
      return state;
    case "SAVING_PREFS_SUCCESS":
      return state;
    case "SAVING_PREFS_FAILURE":
      return state;
    case "INC_NUMBER":
      const incNumber = +state.number + +state.diff;
      return { ...state, number: incNumber };
    case "DEC_NUMBER":
      const decNumber = +state.number - +state.diff;
      return { ...state, number: decNumber };
    case "INPUT_NUMBER":
      return { ...state, results: action.results };
    case "SUBMIT_NUMBER":
      return state;
    case "UPDATE_OPTION":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const fetchResults = () => {
  return dispatch => {
    dispatch({
      type: "FETCHING_RESULTS"
    });

    return fetch("urltofetch.from")
      .then(data => {
        const results = data.data;
        dispatch({
          type: "FETCH_RESULTS_SUCCESS",
          results
        });
      })
      .catch(error => {
        dispatch({
          type: "FETCH_RESULTS_ERROR",
          error
        });
      });
  };
};

export const updateOptions = payload => {
  return {
    type: "UPDATE_OPTION",
    payload
  };
};

export const saveOptions = body => {
  return dispatch => {
    dispatch({
      type: "SAVING_OPTIONS"
    });
    return fetch("URLTO.POST", {
      method: "PUT",
      body
    })
      .then(data => {
        dispatch({
          type: "SAVING_OPTIONS_SUCCESS"
        });
        return data;
      })
      .catch(err => {
        dispatch({
          type: "SAVING_OPTIONS_SUCCESS"
        });
        throw err;
      });
  };
};

export const addToToday = () => {
  return (dispatch, getState) => {
    const number = parseInt(getState().numbers.number, 10);
    const today = new Date();
    const results = getState().numbers.results.map(r => {
      if (r.date === today.getDay()) {
        return {
          date: r.date,
          total: (r.total + number)
        }
      }else{
        return r
      }
    });
    return dispatch({
      type: "INPUT_NUMBER",
      results
    });
  };
};

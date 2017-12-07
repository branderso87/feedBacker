import axios from 'axios'
import {FETCH_USER} from './types'

export const fetchUser = () => {//whenever the action creator is called...
  return function(dispatch) {//it returns a function that is seen my redux thunk that calls it with dispatch
    axios.get('/api/current_user')//we wait to get response back from the api
    .then(res => dispatch({ type: FETCH_USER, payload: res}))//only then do we send to dispatch which will send action to the reducers
  }
}

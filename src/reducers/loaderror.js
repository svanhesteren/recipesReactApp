import {LOADERROR} from '../actions/loadError'


export default function(state = "", action = {}) {
  switch(action.type) {
    case LOADERROR:
      console.log(action.payload);
      return action.payload
    default:
      return state
  }
}

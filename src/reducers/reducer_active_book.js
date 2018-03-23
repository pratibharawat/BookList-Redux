//State argument is not the application state, but the state which this reducer is responsible for
export default function(state = null, action){
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;  //never mutate the current state
  }

  return state; //return current state when there is no action

}

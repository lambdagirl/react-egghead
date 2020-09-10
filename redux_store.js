
{
    type: 'ADD_TODO',
    todo: {
        id: 0,
        name: 'Learn Redux',
        complete: false,
    }
}
{
    type:'REMOVE_TODO',
    id:0,
}
{
    type: 'TOGGLE_TODO',
    id:0,
}


{
    type: 'ADD_GOAL',
    goal: {
        id: 0,
        name: 'Run a Marathon'
    }
}
{
    type: 'REMOVE_GOAL',
    id: 0
}

function createStore (){
  //the store should have four parts
  //1. the state
  //2. Get the state
  //3. Listen to changes on the state.
  //4. Update the state
  let state // state of the entire application. 
  let listeners = [] //array of functions
  const getState = () => state

  //listener is a callback function
  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
        listeners.filter((l) => l !== listener)
    }
  }
  return {
    getState,
    subscribe,
  }
}

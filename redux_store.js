function createStore (){
  //the store should have four parts
  //1. the state
  //2. Get the state
  //3. Listen to changes on the state.
  //4. Update the state

  let state;
  let listeners = [];//array of functions
  const getState = () => state;

  //listener is a callback function
  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
        listeners.filter((l) => l !== listener);
    }
  };

  return {
    getState,
    subscribe,
  };
}

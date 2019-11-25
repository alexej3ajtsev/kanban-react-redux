export function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('redux-state', serializedState);
    return true;
  } catch (error) {
    console.log('An error has occured', error);
    return false;
  }
}

export function loadState() {
  try {
    const state = localStorage.getItem('redux-state');
    if (state === null) {
      return undefined;
    }
    return JSON.parse(state);
  } catch (error) {
    console.log('An error has occured', error);
    return undefined;
  }
}

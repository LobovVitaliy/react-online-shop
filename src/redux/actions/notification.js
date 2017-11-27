export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const RESET_NOTIFICATION = 'RESET_NOTIFICATION';

export const notify = message => ({ type: SET_NOTIFICATION, message });
export const reset = () => ({ type: RESET_NOTIFICATION });
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';


export const addUser = ({ id, email }) => ({ type: ADD_USER, payload: { id, email } });
export const updateUser =  ({ id, email }) => ({ type: UPDATE_USER, payload: { id, email } });
export const deleteUser = ({ id }) => ({ type: DELETE_USER, payload: { id } });

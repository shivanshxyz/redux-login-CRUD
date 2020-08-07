export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';


const initialState = {
  emails: [
    { id: 1, email: 'a@abc.com' },
    { id: 2, email: 'b@abc.com' },
    { id: 3, email: 'c@abc.com' }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, { emails: [...state.emails, action.payload] });

    case UPDATE_USER:
      return Object.assign({}, state, {
        emails: state.emails.map(email =>
          email.id === action.payload.id ? action.payload : email
        )
      });

    case DELETE_USER:
      return Object.assign(
        {},
        { emails: state.emails.filter(email => email.id !== action.payload.id) }
      );
    default:
      return state;
  }
};

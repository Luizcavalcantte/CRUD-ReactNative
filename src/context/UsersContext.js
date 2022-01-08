import React, {createContext, useReducer} from 'react';
import Users from '../data/Users';

const initialState = {Users};
const UserContext = createContext({});

const actions = {
  createUser(state, action) {
    const user = action.payload;
    user.id = Math.random();
    return {...state, Users: [...state.Users, user]};
  },
  updateUser(state, action) {
    const update = action.payload;
    return {
      ...state,
      Users: state.Users.map(u => (u.id === update.id ? update : u)),
    };
  },
  deleteUser(state, action) {
    const user = action.payload;
    return {
      ...state,
      Users: state.Users.filter(u => u.id !== user.id),
    };
  },
};

export const UserProvider = props => {
  function reducer(state, action) {
    const fn = actions[action.type];

    return fn ? fn(state, action) : state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{state, dispatch}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;

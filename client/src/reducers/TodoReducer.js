import { FETCH_ACTIONS_SUCCESS, FETCH_ACTIONS_FAILURE, ADD_ACTION, DELETE_ACTION, UPDATE_ACTION } from '../../src/constants';

const initialState = {
  actions: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTIONS_SUCCESS:
      console.log('Reducer', { ...state, actions: action.payload });
      return { ...state, actions: action.payload };

    case FETCH_ACTIONS_FAILURE:
      return state;

    case ADD_ACTION:
      console.log('Add action', { ...state, actions: [...state.actions, action.payload] });
      return { ...state, actions: [...state.actions, action.payload] };

    case DELETE_ACTION:
      console.log('DELETE action', { ...state, actions: state.actions.filter((act) => act._id !== action.payload) });
      return { ...state, actions: state.actions.filter((act) => act._id !== action.payload._id) };

    case UPDATE_ACTION:
      console.log('UPDATE action', {
        ...state,
        actions: state.actions.map((todo) => (todo._id === action.payload._id ? action.payload : todo))
      });

      return {
        ...state,
        actions: state.actions.map((todo) => (todo._id === action.payload._id ? action.payload : todo))
      };
    default:
      return state;
  }
};

export default todoReducer;

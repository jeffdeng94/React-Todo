import { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetch_actions } from '../actions/index.js';

const ListTodos = () => {
  // 📥 get data from Redux (like @Input)
  const todos = useSelector((state) => state.todos);

  // 📤 dispatch actions (like @Output)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_actions());
  }, [dispatch]);

  const { actions = [] } = todos;

  // Sort alphabetically by action text
  const sortedActions = [...actions].sort((a, b) => a.action.localeCompare(b.action));

  return (
    <>
      {sortedActions.map((act) => (
        <TodoItem key={act._id} todo={act} />
      ))}
    </>
  );
};

export default ListTodos;

import { useEffect } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetch_actions } from '../actions/index.js';

const ListTodos = ({ todos, fetchActions }) => {
  useEffect(() => {
    fetchActions();
  }, [fetchActions]);

  const { actions } = todos;

  return (
    <>
      {actions.map((act) => (
        <TodoItem key={act._id} id={act._id} text={act.action} />
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchActions: fetch_actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListTodos);

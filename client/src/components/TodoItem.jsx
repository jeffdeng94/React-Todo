import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { delete_action, update_action } from '../actions/index.js';

const ItemWrapper = styled.div`
  width: 80%;
  background-color: #3d6fe9;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;

const StyledCheckbox = styled.input`
  margin: 10px;
`;

const StyledText = styled.p`
  margin: 8px;
  color: #fff;
  width: 80%;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  opacity: ${(props) => (props.completed ? 0.7 : 1)};
`;

const StyledButton = styled.button`
  width: 10%;
  color: white;
  background-color: #5b73a7;
  border: 1px solid white;
  border-radius: 10px;
  margin-left: 10px;
`;

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const { _id: id, action: text, completed } = todo;

  const onDeleteClicked = (id) => {
    dispatch(delete_action(id)); // ✅ modern way
  };

  const onToggleCompleted = () => {
    // toggle the completed flag
    dispatch(update_action({ ...todo, completed: !completed }));
  };

  return (
    <ItemWrapper>
      <StyledText completed={completed}>{text}</StyledText>
      <StyledButton onClick={onToggleCompleted}> {completed ? 'Unmark' : 'Mark As Complete'}</StyledButton>
      <StyledButton onClick={() => onDeleteClicked(id)}>Delete</StyledButton>
    </ItemWrapper>
  );
};

export default TodoItem;

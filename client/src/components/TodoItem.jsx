import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { delete_action } from '../actions/index.js';

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
  width: 90%;
`;

const StyledButton = styled.button`
  width: 10%;
  color: white;
  background-color: #5b73a7;
  border: 1px solid white;
  border-radius: 10px;
  margin-left: 10px;
`;

const TodoItem = ({ id, text }) => {
  const dispatch = useDispatch();

  const onDeleteClicked = (id) => {
    dispatch(delete_action(id)); // ✅ modern way
  };

  return (
    <ItemWrapper>
      <StyledCheckbox type="checkbox" />
      <StyledText>{text}</StyledText>
      <StyledButton onClick={() => onDeleteClicked(id)}>Delete</StyledButton>
    </ItemWrapper>
  );
};

export default TodoItem;

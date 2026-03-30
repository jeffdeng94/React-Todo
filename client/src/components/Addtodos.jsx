import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { add_action } from '../actions/index';

const OuterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledInput = styled.input`
  width: 70%;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

const StyledButton = styled.button`
  width: 10%;
  color: white;
  background-color: #5b73a7;
  border: none;
  border-radius: 10px;
  margin-left: 10px;
`;

const AddTodos = () => {
  const [text, setText] = useState('');

  // 📤 dispatch (like @Output)
  const dispatch = useDispatch();
  // ✅ proper function declaration
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const onAddClicked = () => {
    console.log('Add', text);

    if (!text.trim()) return; // optional safety

    dispatch(add_action(text)); // ✅ modern way
    setText('');
  };

  return (
    <OuterWrapper>
      <StyledInput value={text} onChange={handleChange} />
      <StyledButton onClick={onAddClicked}>Add</StyledButton>
    </OuterWrapper>
  );
};

export default AddTodos;

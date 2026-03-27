import { useState } from 'react';
import { connect } from 'react-redux';
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

const AddTodos = ({ add_action }) => {
  const [text, setText] = useState('');
  // ✅ proper function declaration
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const onAddClicked = () => {
    console.log('Add', text);

    if (!text.trim()) return; // optional safety

    add_action(text);
    setText('');
  };

  return (
    <OuterWrapper>
      <StyledInput value={text} onChange={handleChange} />
      <StyledButton onClick={onAddClicked}>Add</StyledButton>
    </OuterWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  add_action: (text) => dispatch(add_action(text))
});

export default connect(null, mapDispatchToProps)(AddTodos);

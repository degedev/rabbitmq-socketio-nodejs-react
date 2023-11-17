import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginForm = styled.form`
  width: 40%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 10px;
`;

export const Label = styled.label`
  display: flex;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

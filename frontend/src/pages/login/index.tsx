import React, { useState } from "react";
import {
  LoginContainer,
  LoginForm,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
} from "./styles";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState(null);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const emailLogin = email;
    try {
      const response = await fetch(
        `http://localhost:3333/users/${emailLogin}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("Login bem-sucedido!");
        const userData = await response.json();
        const { id } = userData;
        setUserId(id);
      } else {
        console.log("Login falhou!");
      }
    } catch (error) {
      console.log("Erro ao fazer login:", error);
    }

    setEmail("");
  };

  if (userId) {
    return <Redirect to={`/store/${userId}`} />;
  }

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Login</Title>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormGroup>
        <Button type="submit">Entrar</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;

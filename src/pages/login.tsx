import { Button } from "../components/button";
import styled from "styled-components";
import { useContext } from "react";
import { AuthGoogleContext } from "../contexts/authGoogle";

interface IAuthContext {
  signInGoogle: () => void;
  signed: boolean;
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(82, 0, 122);
  background: linear-gradient(
    144deg,
    rgba(82, 0, 122, 1) 0%,
    rgba(97, 0, 144, 1) 25%,
    rgba(121, 0, 168, 1) 50%,
    rgba(149, 0, 201, 1) 75%,
    rgba(109, 0, 195, 1) 100%
  );
`;

export const Login = () => {
  const { signInGoogle } = useContext(AuthGoogleContext) as IAuthContext;

  return (
    <Container>
      <Button function={signInGoogle} label="LOGIN COM GOOGLE" />
    </Container>
  );
};

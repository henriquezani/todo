import styled from "styled-components";

interface ButtonProps {
  label: string;
  function?: () => void;
}

const StyledButton = styled.button`
  color: #fff;
  padding: 10px 5%;
  border: 0;
  border-radius: 5px;
  font-size: 32px;
  cursor: pointer;
  background: rgb(82, 0, 122);
  background: linear-gradient(
    90deg,
    rgba(82, 0, 122, 0.5) 0%,
    rgba(88, 8, 140, 0.5) 50%,
    rgba(82, 0, 122, 0.5) 100%
  );
  box-shadow: 5px;
  transition: 100ms;

  &&:hover {
    filter: brightness(0.95);
  }
`;

export const Button = (props: ButtonProps) => (
  <>
    <StyledButton onClick={props.function} >{props.label}</StyledButton>
  </>
);

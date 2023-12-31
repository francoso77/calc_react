import styled from 'styled-components'

interface ButtonCustomProps {
  bgColor: string;
  hoverColor: string;
}

export const ButtonCustom = styled.button<ButtonCustomProps>`
  width: 85px;
  height: 85px;
  border-style: none;
  border-width: 0px;
  border-radius: 5px;
  color: #ffff;
  font-weight: bold;
  font-size: 20px;
  background-color: ${(props) => props.bgColor};

  &:hover{
    background-color: ${(props) => props.hoverColor};
  }  
`;
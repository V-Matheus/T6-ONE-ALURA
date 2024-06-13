import styled from 'styled-components';

const CampoTextoEstilizado = styled.input`
  width: 426px;
  height: 56px;
  background-color: #00084d;
  border: 2px solid #7b78e5;
  border-radius: 5px;
  padding-left: 15px;
  color: #d9d9d9;
  font-family: Gandhi Sans;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;

  &::placeholder {
    color: #d9d9d9;
  }
`;

export const CampoTexto = () => {
  return <CampoTextoEstilizado placeholder="O que você procura?" />;
};

import styled from "styled-components";
import Images from "../assests/img/Images";

export const Sentence = styled.p`
  border: 2px solid black;
  border-radius: 2em;
  padding: 5px;
  text-align: center;
  margin: 20px;
`;

export const Btn = styled.button`
  padding: 10px;
  width: 50%;
  margin-top: 10px;
  font-size: 18px;
  cursor: pointer;
`;

export const ChangeSentence = styled.p`
  border: 2px solid black;
  border-radius: 2em;
  padding: 5px;
  text-align: center;
  margin: 20px;
  background-color: #ffc0cb;
`;

export const ContainerBtn = styled.div`
  margin: 15px;
`;

export const HeaderScreen = styled.header`
  margin: 150px;
  padding: 10px;
  text-align: center;
  font-size: 40px;
`;

export const BtnScreen = styled.button`
  background-color: #3a79be;
  color: white;
  padding: 10px;
  font-size: 30px;
  border: 2px solid;
  border-radius: 0.3em;
  cursor: pointer;
`;

export const Container = styled.div`
  background-image: ${({ isTrue }) =>
    isTrue ? require(Images[0].img) : "imagenes[1].img"};
`;

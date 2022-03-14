import React from "react";
import { Sentence, ChangeSentence } from "../../styles/styled";

export const Escena = (props) => (
  <div>
    {props.isSelected === true && (
      <ChangeSentence>{props.title}</ChangeSentence>
    )}
    {props.isSelected === false && <Sentence>{props.title}</Sentence>}
  </div>
);

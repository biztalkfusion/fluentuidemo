import React, { FC } from "react";
import {PrimaryButton} from "@fluentui/react";

type GreetingProps = {
  name: string;
}

const Greeting:FC<GreetingProps> = ({ name }) => {
  // name is string!
  return (<>
  <h1>Hello {name}</h1>
  <PrimaryButton onClick={_alertClicked}>Nice Button from Heaven</PrimaryButton>
  </>)
};
function _alertClicked() {
  alert('Clicked');
}


export default Greeting

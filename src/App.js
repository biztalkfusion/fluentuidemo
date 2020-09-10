import React from "react";
import Greeting from "./WelcomeTS";

function MyStuff(props) {
  return (<>This is {props.name} writing something</>)
}
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
export default function App() {
  const title = 'Whatever title'
  return (
    <>
      <h1>Hello StackBlitz!</h1>
      <Greeting name="God Almighty"></Greeting>
      <Welcome name="sheshadri"></Welcome>
      <MyStuff name="Ganeshan"/>
      <MyStuff name="Guru"/>
      <h2 id="myHeading">This is a heading 2 {title}</h2>
      <p>Start editing to see some magic happen :)</p>
    </>
  );
}

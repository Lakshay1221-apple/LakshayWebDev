// import Header from "./header.jsx";
// import Footer from "./Footer.jsx";
// import Food from "./Food.jsx";

import Card from "./Card.jsx";
// button is under an external  module folder, this could be done for better organisation on working with big projects 
// import Button from "./button/Button.jsx";

import Student from './student.jsx';
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import Button1 from "./Button1.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponent from "./myComponent.jsx";
import Counter from "./Counter.jsx";
import Car from "./Car.jsx";

import ColorPicker from "./ColorPicker.jsx";

function App() {

  return(
    <>
      {/* <Header/>
      <Food/>
      <Footer/> */}
      <Card/><br></br>
      <Button1/>

      <Student name = "Lakshay Raj" age = "20" class = "Btech"/>
      <UserGreeting isLoggedIn = {true} username = "Lakshay"/><br></br>
      <List/>
      <ProfilePicture/>
      <br>
      </br>
      <MyComponent/>
      <Counter/><br/>
      <ColorPicker/>
      <Car/>

      
    </>
  );
}

export default App





import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import MainContent from "./components/MainContent.jsx"
import JsxRules from "./components/JsxRules.jsx"
import Dynamic from "./components/Dynamic.jsx"
import Greeting from "./components/Greeting.jsx"
import ProductInfo from "./components/ProductInfo.jsx"
import UserList from "./components/userList.jsx"
import Password from "./components/Password.jsx"
import Weather from "./components/Weather.jsx"
import UserStatus from "./components/UserStatus.jsx"
import { FaCartArrowDown } from "react-icons/fa";
import { BsEarbuds } from "react-icons/bs";
import { MdOutlinePower } from "react-icons/md";
import { BsSdCardFill } from "react-icons/bs";
import { GiLoincloth } from "react-icons/gi";
import Indec from "./components/Indec.jsx";


// This is a component definition (which will act as a child when rendered)
const User = ({ name, age }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
    </div>
  )
}

const Cart = () => {
  const items = [
    { icon: <BsEarbuds color = "red"/>, name: "Wireless Earbuds" },
    { icon: <MdOutlinePower color = "pink" />, name: "Power Bank" },
    { icon: <BsSdCardFill color = "purple" />, name: "New SSD" },
    { icon: <GiLoincloth color = "Blue" />, name: "Hoodies" },
  ];

  return(
    <div>
      <h1>Cart <FaCartArrowDown /></h1>

      {items.length > 0 && <h4> You have {items.length} items in your Cart</h4>} 
      {items.length === 0 && <h4>Cart is Empty</h4>}

      <ul>
        {items.map(item => (
          <li key={item.name}>{item.icon} {item.name}</li>
        ))}
      </ul>

    </div>
  )
}


const App = () => {

  return(
    <>

      {/* <h1>Hello Wrold!</h1> */}
      <Header/>
      <hr/>
      <MainContent/>
      <hr/>
      <JsxRules/>
      <hr/>
      <div className="dynamic-section">
        <h2>How to Embeded Dynamic Content in JSX</h2>
        <Dynamic/>
      </div>
      <hr/>
      <Greeting/>
      <hr/>
      <ProductInfo/>
      <hr/>
      <UserList/>
      <hr/>
      <Indec/>
      <hr/>
      <Password isValid = {true}/>
      <hr/>
      <UserStatus loggedIn = {true} isAdmin = {false}/>
      <hr/>
      <Weather temp = {16}/>
      <hr/>
      <Cart/>
      <hr/>
      {/* 🌳 PARENT COMPONENT: App renders the child below and passes props */}
      {/* 👶 CHILD COMPONENT: User is being rendered by App and receives props */}
      {/* this is a parent component  */}
      <User name = "Lakshay WebDev" age = {22}/>
      <hr/>
      <Footer/>



    </>
  )
}

export default App;

import React, { useRef } from "react";
import UseReff from "./component/useReff.jsx";
import Timer from "./component/Timer.jsx";
import useFetch from "./component/useFetch.jsx";




const App = () => {

  const[data] =  useFetch('https://jsonplaceholder.typicode.com/todos')


  const inputElement = useRef(null);
  console.log(inputElement);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "lakshay";
  };

// this is data fetching without custom hook, if you need to do this any of the other component you will have to repeat the sameprocess, but with coustom hook you can do it once and use everywhere
  // const [data , setData] = useState(null)

  // useEffect(() => { // Corrected syntax in the comment
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);


  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus and write laskshay</button>
      <hr />
      <UseReff />
      <hr />
      <Timer />

      <hr/>

      {data &&  

        data.map((item) => {

          return <p key = {item.id}>{item.title}</p>
      })}

    </>
  );
};

export default App;

import React from 'react'

const MainContent = () => {

  const numbers = [1, 2, 3, 4, 5]

  const userInfo = [
    {
      username : "James",
      email : "james@gmail.com",
      location: "New York"
    },
    {
      username: "Adam",
      email : "adam@gmail.com",
      location : "London"

    }
  ];

  const copyHandler = () => {
    window.alert("Stop Copying My Content");
  };
  
  return (
    <div  onCopy = {copyHandler} >
        <h2>This is the main content Part</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quisquam amet sint explicabo. Delectus molestiae id harum tempore, provident recusandae architecto eius unde? 
            Necessitatibus, est beatae veritatis laudantium consectetur maxime!</p>
        <form>
            <label htmlFor="name">Name </label>
            <input type="text" id="name" placeholder="Your Name"/>
        </form>
        {/* this is how to itrate every item  in array with react */}
        <div>
          <main>
            {numbers.map(number => (
              <ul>
                <li>{number}</li>
              </ul>
            ))}
          </main>
          {/* in this div in the function destructing method is used where we no longer have to write things like user.username etc */}
          <div>
            {userInfo.map(({ username, email, location }) => (
              <ul key={email}>
                <li>Name : {username}, Email : {email}, Location : {location}</li>
              </ul>
            ))}
          </div>
        </div>
    </div>
  )
}

export default MainContent;

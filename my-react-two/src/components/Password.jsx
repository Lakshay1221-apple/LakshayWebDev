
import React from 'react'

const Password = ({ isValid }) => {

    const ValidPassword = () => <h1>The Password is Valid</h1>;
    const InvalidPassword = () => <h1>The Password is Invalid</h1>;

    // Use a ternary operator for concise conditional rendering
    return isValid ? <ValidPassword /> : <InvalidPassword />;
}

export default Password;
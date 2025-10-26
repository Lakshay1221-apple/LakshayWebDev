import React from 'react'

const JsxRules = () => {
  return (
    <div className = "rules-container">
        <h1>Jsx Rules</h1>
        <p>1. JSX must be written in a single root element. For example, all elements should be wrapped in a single div tag or a fragment.</p>
        <p>2. JSX element must be properly closed.</p>
        <p>3. JSX attributes must be written in camelCase (e.g., `className`) because many standard HTML attributes are reserved words in JavaScript (e.g., `class`).</p>
    </div>
  )
}

export default JsxRules;
// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({ children }) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  // 🐨 replace this with a call to React.Children.map and map each child in
  // props.children to a clone of that child with the props they need using
  // React.cloneElement.
  // 💰 React.Children.map(props.children, child => {/* return child clone here */})
  // 📜 https://reactjs.org/docs/react-api.html#reactchildren
  // 📜 https://reactjs.org/docs/react-api.html#cloneelement
  // return <Switch on={on} onClick={toggle} />

  return React.Children.map(children, child => {
    return React.cloneElement(child, {
      on,
      toggle
    })
  })
}

// 🐨 Flesh out each of these components

// Accepts `on` and `children` props and returns `children` if `on` is true
// const ToggleOn = () => null
const ToggleOn = ({ on, children }) => on ? <>{children}</> : null
// Note, in the tutorial, it just returns children directly,
// no <></> at sides.

// Accepts `on` and `children` props and returns `children` if `on` is false
// const ToggleOff = () => null
const ToggleOff = ({ on, children }) => !on ? <>{children}</> : null

// Accepts `on` and `toggle` props and returns the <Switch /> with those props.
// const ToggleButton = () => null
const ToggleButton = ({ on, toggle }) => <Switch on={on} onClick={toggle} />


/* 
// Exercise
function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <ToggleButton />
      </Toggle>
    </div>
  )
}
 */


// Extra 1
// Go to final and tutorial video to check the solution
function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/

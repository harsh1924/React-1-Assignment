import Person from "./Person.jsx"

export default function App() {
  return (
    <>
      <h3> Assignment 1
        <Person name="Harsh" age="22" />
      </h3>
      <div></div>
    </>
  )
}


export function MyButton(props) {
  return (
    <>
      <button onClick={() => console.log("Hi")}>{props.text}</button>
    </>
  )
}

export function Header(props) {
  return (
    <>
      <h3>Assignment 3</h3>
      <header>Header = {props.title}</header>
    </>
  )
}

export function List(props) {
  const items = props.items
  return (
    <>
      <ul>Assignment 4 Items
        {items.map((item) => (
          <li>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}
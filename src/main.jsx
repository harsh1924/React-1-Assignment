import React from 'react'
import ReactDOM from 'react-dom/client'
import App, {MyButton, Header, List} from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MyButton text = "Assignmet 2 Button" />  
    <Header title="Assignmnet 3 Header" />
    <List items={['One Piece', 'Attack on Titan', 'Solo Levelling', 'Naruto']}/>

  </React.StrictMode>,
)

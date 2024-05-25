import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [lists, addList] = useState([])

  useEffect(()=>{
    fetch('http://127.0.0.1:2000/lists').then(res => res.ok ? res.json() : Promise.reject(err => {
      if (err){
        console.error(err)
      }
    })).then(data => {
      console.log(data)
      addList(data)
    })
  }, [])

  return (
    <div className="app">
      <div className="app__container">
        <h1>Task Lists</h1>
        {lists.map(item => {
          return (
            <div key={item._id} className="list__item">
              <h2 className="list__item-title">{item.title}</h2>
            </div>
          )
        })}

        
      </div>
    </div>
  )
}

export default App

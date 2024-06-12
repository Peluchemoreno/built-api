import { useEffect, useState } from 'react'
import './App.css'
import Api from '../../utils/api.js'
import CreateList from '../CreateList/CreateList.jsx'

function App() {

  const [lists, setLists] = useState([])
  const api = new Api('http://127.0.0.1:2000/')

  useEffect(()=>{
    api.getLists().then(data => {
      console.log(data)
      setLists(data)
    })
  }, [])

  function removeList(item){
    api.removeList(item._id)
    const filteredList = lists.filter(list => {
      return list._id !== item._id
    })
    setLists(filteredList)
  }

  function addList(list){
    api.addList(list).then(data => {
      setLists([...lists, data])
    })
  }

  return (
    <div className="app">
      <div className="app__container">
        <h1>Task Lists</h1>
        {lists.map(item => {
          return (
            <div key={item._id} className="list__item" onClick={() => {removeList(item)}}>
              <h2 className="list__item-title">{item.title}</h2>
            </div>
          )
        })}
        <CreateList handleAddList={addList}/>
        
      </div>
    </div>
  )
}

export default App

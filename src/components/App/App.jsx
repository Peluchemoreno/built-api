import { useEffect, useState } from 'react'
import './App.css'
import Api from '../../utils/api.js'
import CreateList from '../CreateList/CreateList.jsx'
import ConfirmDeleteModal from '../ConfirmDeleteModal/ConfirmDeleteModal.jsx'

function App() {

  const [lists, setLists] = useState([])
  const [deleteConfirmVisibility, setDeleteConfirmVisibility] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})
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
    setDeleteConfirmVisibility(false);
  }

  function addList(list){
    api.addList(list).then(data => {
      setLists([...lists, data])
    })
  }


  function handleItemClick(item){
    console.log(item)
  }

  function handleConfirmModalToggle(){
    setDeleteConfirmVisibility(!deleteConfirmVisibility)
  }

  function handleClose(){
    setDeleteConfirmVisibility(false)
  }


  return (
    <div className="app">
      <div className="app__container">
        <h1 className='app__header'>Task Lists</h1>
       {lists.length === 0 ? "Add a list item to begin" :  lists.map(item => {
          return (
            <div key={item._id} className="list__item" onClick={() => {
              handleConfirmModalToggle()
              setSelectedItem(item)
              }}>
              <h2 className="list__item-title">{item.title}</h2>
            </div>
          )
        })}
        <CreateList handleAddList={addList}/>
        <ConfirmDeleteModal removeList={removeList} selectedItem={selectedItem} handleClose={handleClose} isVisible={deleteConfirmVisibility}/>
      </div>
    </div>
  )
}

export default App

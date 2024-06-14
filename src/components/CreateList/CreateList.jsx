import { useState } from "react";
import "./CreateList.css"

export default function CreateList({handleAddList}){

  const [titleVal, setTitleVal] = useState('')

  function handleAddSubmit(e){
    e.preventDefault();
    if (titleVal === ''){
      alert("You can not add an empty item")
    } else {
      const item = {title: titleVal}
      handleAddList(item)
      setTitleVal('')
    }
  }

  function handleChange(e){
    setTitleVal(e.target.value)
  }

  return (
    <div className="modal">
      <form className="modal__form" onSubmit={(e)=>{handleAddSubmit(e)}}>
        <label htmlFor="title" className="form__label"><span className="form__label-title">Title:</span>
          <input placeholder="Enter a List Name" id='title' name='title' type="text" className="form__input form__input_type_list-title" value={titleVal} onChange={handleChange} />
        </label>
        <button onClick={handleAddSubmit} type="button" className="create-list-button">Add List</button>
      </form>
    </div>
  )
}
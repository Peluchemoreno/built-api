import { useState } from "react";

export default function CreateList({handleAddList}){

  const [titleVal, setTitleVal] = useState('')

  function handleAddSubmit(e){
    e.preventDefault();
    const item = {title: titleVal}
    handleAddList(item)
    setTitleVal('')
  }

  function handleChange(e){
    setTitleVal(e.target.value)
  }

  return (
    <div className="modal">
      <form className="modal__form" onSubmit={(e)=>{handleAddSubmit(e)}}>
        <label htmlFor="title" className="form__label">Title:
          <input id='title' name='title' type="text" className="form__input form__input_type_list-title" value={titleVal} onChange={handleChange} />
        </label>
        <button type="button" className="create-list-button">Add List</button>
      </form>
    </div>
  )
}
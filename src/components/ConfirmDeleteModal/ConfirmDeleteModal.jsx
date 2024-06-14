import "./ConfirmDeleteModal.css"
export default function ConfirmDeleteModal({isVisible, handleClose, removeList, selectedItem}){

  function handleDeleteConfirm(){
    removeList(selectedItem)
    handleClose();
  }



  return (
    <div className={isVisible ? "confirm-delete-modal confirm-delete-modal_visible" : "confirm-delete-modal"}>
      <div className="confirm-delete-modal-container">
        <div className="confirm-delete-modal-header">
          <h2 className="confirm-delete-title">Are you sure you want to delete this item?</h2>
        </div>
        <div className="confirm-delete-buttons">
          <button onClick={handleDeleteConfirm} className="button button_yes">Yes, I'm sure</button>
          <button onClick={handleClose} className="button button_no">No, keep it</button>
        </div>
      </div>
    </div>
  )
}
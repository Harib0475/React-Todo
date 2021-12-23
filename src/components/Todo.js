import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  function deleteTodoHandler() {
    setmodalIsOpen(true);
  }

  function closeModalHandler() {
    setmodalIsOpen(false);
  }   
  return (
    <div>
      <h2>{props.title}</h2>
      <div>
        <button onClick={deleteTodoHandler}>Delete</button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
      
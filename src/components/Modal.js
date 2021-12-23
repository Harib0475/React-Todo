function Modal(props) {
    function cancelHandler(){
        props.onCancel();
    }
    function confirmHandler(){
        props.onConfirm();

    }
  return (
    <div>
      <p>Are You Sure!</p>
      <button onClick={cancelHandler}>Cancel</button>
      <button onClick={confirmHandler}>Confirm</button>
    </div>
  );
}

export default Modal;

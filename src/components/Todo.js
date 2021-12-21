function Todo(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <div>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
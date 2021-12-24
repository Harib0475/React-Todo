import { useRef } from "react";
function NewMeetup(props) {
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const imageInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const nameInputValue = nameInputRef.current.value;
    const imageInputValue = imageInputRef.current.value;
    const descriptionInputValue = descriptionInputRef.current.value;
    const meetupData = {
      name: nameInputValue,
      image: imageInputValue,
      description: descriptionInputValue,
    };
    props.onAddMeetup(meetupData);
  }
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Name</label>
      <input type="text" required id="name" ref={nameInputRef} />
      <label htmlFor="description">Description</label>
      <input type="text" required id="description" ref={descriptionInputRef} />
      <label htmlFor="image">Image Url</label>
      <input type="url" required id="image" ref={imageInputRef} />
      <button>Add Meetup</button>
    </form>
  );
}
export default NewMeetup;

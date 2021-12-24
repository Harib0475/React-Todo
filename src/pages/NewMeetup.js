import { useEffect } from "react";
import NewMeetup from "../components/meetups/newMeetup.js";
import { useNavigate } from "react-router-dom";
function NewMeetupPage(props) {
  const history = useNavigate();
  function onAddMeetupHandler(meetupData) {
    fetch(
      "https://my-react-startup-default-rtdb.firebaseio.com/meeetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
        history('/')
    });
  }
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <section>
      <h1>Add New MeetUp</h1>
      <NewMeetup onAddMeetup={onAddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;

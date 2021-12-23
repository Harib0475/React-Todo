import { useEffect } from "react";
 
function NewMeetupPage(props) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return <div>NewMeetupPage</div>;
}

export default NewMeetupPage;

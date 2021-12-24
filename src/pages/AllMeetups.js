import { useEffect } from "react";
import MeetupList from "../components/meetups/meetupList";
import { useState } from "react";

function AllMeetupsPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // document.title = props.title;
    setIsLoading(true);
    fetch("https://my-react-startup-default-rtdb.firebaseio.com/meeetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;

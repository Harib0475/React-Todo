import { useEffect } from "react";
import MeetupList from "../components/meetups/meetupList";
const DUMMY_DATA = [
  {
    id: 1,
    name: "Some Name 1",
    description: "Some description 1",
    image:
      "https://media.istockphoto.com/photos/group-of-unrecognisable-international-students-having-online-meeting-picture-id1300822108?b=1&k=20&m=1300822108&s=170667a&w=0&h=CPtbj-Ax8p0oHcxhk30uhQEXc05Yg1LrfEdpxN1p2rc=",
  },
  {
    id: 2,
    name: "Some Name 2",
    description: "Some description 2",
    image:
      "https://media.istockphoto.com/photos/searching-browsing-data-information-network-concept-businessman-using-picture-id1264839512?b=1&k=20&m=1264839512&s=170667a&w=0&h=QbzcI671w7ELHtwSMX2VqWOKRIfbq8xiDsBfkd0f9wo=",
  },
  {
    id: 3,
    name: "Some Name 3",
    description: "Some description 3",
    image:
      "https://media.istockphoto.com/photos/african-american-student-attending-webinar-from-home-picture-id1300821205?b=1&k=20&m=1300821205&s=170667a&w=0&h=4w8jY3puiv8Qe3lM9UM9FC6ozRTTU8asziK4HJgfVog=",
  },
];

function AllMeetupsPage(props) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA}/>
    </section>
  );
}

export default AllMeetupsPage;

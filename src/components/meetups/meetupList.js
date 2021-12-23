import MeetupItem from "./meetupItem";

function MeetupList(props) {
  return (
    <ul>
      {props.meetups.map((meetup) => (
        <MeetupItem key={meetup.id} name={meetup.name} meetup={meetup} />
      ))}
    </ul>
  );
}

export default MeetupList;

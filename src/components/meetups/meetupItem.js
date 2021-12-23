function MeetupItem(props) {
  return (
    <li key={props.meetup.id}>
      <img src={props.meetup.image} alt={props.meetup.name} />
      <h2>{props.meetup.name}</h2>
      <p>{props.meetup.description}</p>
      <button>Add to Favorite</button>
    </li>
  );
}
export default MeetupItem;

import { useContext } from "react";
import FavoritesContext from "../../store/favorite-context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  console.log(props.meetup.id, favoritesCtx);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.meetup.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      console.log(props.meetup.id);
      favoritesCtx.removeFavorite(props.meetup.id);
    } else {
      favoritesCtx.addFavorite(props.meetup);
    }
  }
  return (
    <li key={props.meetup.id}>
      <img src={props.meetup.image} alt={props.meetup.name} />
      <h2>{props.meetup.name}</h2>
      <p>{props.meetup.description}</p>
      <button onClick={toggleFavoriteStatusHandler}>
        {itemIsFavorite ? "Remove From Favorite" : "Add to Favorite"}
      </button>
    </li>
  );
}
export default MeetupItem;

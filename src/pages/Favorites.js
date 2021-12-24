import { useContext, useEffect } from "react";
import FavoritesContext from "../store/favorite-context";
import MeetupList from "../components/meetups/meetupList";
function FavoritePage(props) {
  const favoritesCtx = useContext(FavoritesContext);

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <ul>
      {favoritesCtx.totalFavorites ? (
        <MeetupList meetups={favoritesCtx.favorities} />
      ) : (
        "You Dont have any favorite"
      )}
    </ul>
  );
}

export default FavoritePage;

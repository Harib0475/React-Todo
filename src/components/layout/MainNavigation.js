import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorite-context";
function MainNavigationComponent() {
  const favContext = useContext(FavoritesContext);
  return (
    <header>
      <div className={classes.header}>MEETUPS</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favorite">
              Favorite Meetups {favContext.totalFavorites}
            </Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigationComponent;

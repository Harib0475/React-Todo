import AllMeetupsPage from "./pages/AllMeetups";
import FavoritePage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import { Routes, Route } from "react-router-dom";
import MainNavigationComponent from "./components/layout/MainNavigation";
import NotFoundPage from "./pages/NotFound";
function App() {
  return (
    <div>
      <MainNavigationComponent />
      <Routes>
        <Route path="/" element={<AllMeetupsPage title="ALL Meetup" />} exact />
        <Route
          path="/favorite"
          element={<FavoritePage title="Fav Meetup" />}
          exact
        />
        <Route
          path="/new-meetup"
          element={<NewMeetupPage title="New Meetup" />}
          exact
        />
        <Route
          element={<NotFoundPage title="Not Found" />}
          exact
        />
      </Routes>
    </div>
  );
}

export default App;

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritePage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFound";
import Layout from "./components/layout/Layout";
function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage title="ALL Meetup" />} exact />
        <Route
          path="/favorite"
          element={<FavoritePage title="Fav Meetup {}" />}
          exact
        />
        <Route
          path="/new-meetup"
          element={<NewMeetupPage title="New Meetup" />}
          exact
        />
        <Route element={<NotFoundPage title="Not Found" />} exact />
      </Routes>
    </Layout>
  );
}

export default App;

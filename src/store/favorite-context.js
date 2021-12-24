import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorities: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetUpId) => {},
  itemIsFavorite: (meetUpId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  function addFavoriteHandler(favoriteMeetup) {
    console.log("addFavoriteHandler", favoriteMeetup);
    setUserFavorites((previousUserFavorite) => {
      return previousUserFavorite.concat(favoriteMeetup);
    });
  }
  function removeFavoriteHander(meetUpId) {
    console.log("removeFavoriteHander", meetUpId);
    // setUserFavorites((previousUserFavorite) => {
    //   return previousUserFavorite.filter((x) => x.id !== meetUpId);
    // });
    setUserFavorites((previousUserFavorite) => {
      return previousUserFavorite.filter((meetup) => 
         meetUpId !== meetup.id
      );
    });
  }
  function itemIsFavoriteHander(meetUpId) {
    console.log("itemIsFavoriteHander", meetUpId);

    return userFavorites.some((meetup) => meetUpId === meetup.id);
  }

  const context = {
    favorities: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHander,
    itemIsFavorite: itemIsFavoriteHander,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContext;

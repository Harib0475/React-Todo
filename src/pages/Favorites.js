import { useEffect } from "react";

function FavoritePage(props) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return <div>FavoritePage</div>;
}

export default FavoritePage;

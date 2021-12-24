import { useEffect } from "react";
 
function NotFoundPage(props) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return <div>Page Not Found</div>;
}

export default NotFoundPage;

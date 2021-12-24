import MainNavigationComponent from "./MainNavigation";
function Layout(props) {
  return (
    <div>
      <MainNavigationComponent />
      <main>{props.children}</main>
    </div>
  );
}
export default Layout;

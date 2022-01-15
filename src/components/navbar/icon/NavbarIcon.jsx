const NavbarIcon = ({icon,children}) => {
  return (
    <div className="navbar__icons--item">
      <Rss />
      <p className="icon--text">{children}</p>
    </div>
  );
};

export default NavbarIcon;

const NavbarIcon = ({
  handleClick,
  visited,
  children,
  icon,
  dropdownItems,
}) => {
  return (
    <div className={visited} onClick={() => handleClick(icon.id)}>
      {icon.icon}
      <p className="icon--text">{children}</p>
      {dropdownItems ? (
        <div className="dropdown-content">
          {dropdownItems.map((item) => (
            <a href="#">{item}</a>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavbarIcon;

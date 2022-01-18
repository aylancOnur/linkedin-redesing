const Tabs = ({ handleClick, children, active, tab }) => {
  return (
    <button onClick={() => handleClick(tab.id)} className={active}>
      {children}
    </button>
  );
};

export default Tabs;

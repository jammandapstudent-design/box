const Header = ({ surname }) => {
  return (
    <h1 style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'serif' }}>
      {surname}
    </h1>
  );
};

export default Header;
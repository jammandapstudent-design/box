const Box = ({ subjectCode }) => {
  const boxStyle = {
    backgroundColor: '#FFC0CB', // Pink
    width: '200px',
    height: '200px',
    border: '2px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px auto',      // Centers the box horizontally
    fontSize: '14px',
    fontFamily: 'sans-serif',
    fontWeight: 'bold'
  };

  return (
    <div style={boxStyle}>
      {subjectCode}
    </div>
  );
};

export default Box;
import React from 'react';
import Header from './components/Header';
import Box from './components/Box';

function App() {
  // Data to be passed down
  const userSurname = "John Adrielle Mandap";
  const courseCode = "CPEITEL";

  return (
    <div className="App">
      {/* Passing data via Props */}
      <Header surname={userSurname} />
      <Box subjectCode={courseCode} />
    </div>
  );
}

export default App;
import React, { useEffect, useState } from 'react';
import { StartingModal } from './components/StartingModal';

function App() {
  const [showBoard, setShowBoard] = useState(false);

  return (
    <div className="App">
      {!showBoard ? <StartingModal showBoard={showBoard} showBoardHandler={setShowBoard}/> : <div> colin </div>}
    </div>
  );
}

export default App;

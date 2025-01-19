import React, { useState, useEffect } from 'react';

const Home = () => {
  const initialPuzzle = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ];

  const [puzzle, setPuzzle] = useState(initialPuzzle);
  const [selectedCell, setSelectedCell] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    const isComplete = checkCompletion();
    if (isComplete) {
      if (checkSolution()) {
        setGameWon(true);
        setPopupMessage("Congratulations! You solved the puzzle!");
      } else {
        setPopupMessage("Incorrect solution, try again!");
      }
      setGameOver(true);
      setPopupVisible(true);
    }
  }, [puzzle]);

  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col });
    setPopupVisible(true);
  };


  const handleInputChange = (value) => {
    if (selectedCell) {
      const { row, col } = selectedCell;
      const newPuzzle = puzzle.map((rowArray, rowIndex) =>
        rowArray.map((cellValue, colIndex) =>
          rowIndex === row && colIndex === col ? value : cellValue
        )
      );
      setPuzzle(newPuzzle);
    }
    setPopupVisible(false);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setPopupMessage("");
    if(gameOver){
        setGameOver(false);
        setGameWon(false);
        setPuzzle(initialPuzzle);
    }
  }

   const checkCompletion = () => {
    return puzzle.every((row) => row.every((cell) => cell !== 0));
  };

  const checkSolution = () => {
        const solution = [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9],
        ];

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (puzzle[i][j] !== solution[i][j]) {
                    return false;
                }
            }
        }
        return true;
    };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative">
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-800">Sudoku</h1>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="grid grid-cols-9 gap-1">
            {puzzle.map((row, rowIndex) =>
              row.map((cell, colIndex) => (
                <button
                  key={`${rowIndex}-${colIndex}`}
                  className={`aspect-square  flex justify-center items-center
                     font-medium text-xl focus:outline-none
                    ${
                      (rowIndex >= 0 && rowIndex <= 2 && colIndex >= 0 && colIndex <= 2) || (rowIndex >= 6 && rowIndex <= 8 && colIndex >= 0 && colIndex <= 2) ||
                      (rowIndex >= 0 && rowIndex <= 2 && colIndex >= 6 && colIndex <= 8) || (rowIndex >= 6 && rowIndex <= 8 && colIndex >= 6 && colIndex <= 8) ||
                       (rowIndex >= 3 && rowIndex <= 5 && colIndex >= 3 && colIndex <= 5)
                      ? 'bg-blue-100 border border-blue-300 hover:bg-blue-200 focus:bg-blue-200'
                        : 'border border-gray-300 hover:bg-gray-200 focus:bg-gray-200'
                    }
                    ${initialPuzzle[rowIndex][colIndex] !== 0 ? 'text-black font-bold' : 'text-gray-700'}`}

                  onClick={() => initialPuzzle[rowIndex][colIndex] === 0 ? handleCellClick(rowIndex, colIndex) : null}
                  >
                  {cell !== 0 ? cell : ''}
                </button>
              ))
            )}
          </div>
        </div>
         {popupVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-lg shadow-xl p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-center text-purple-800">
                            {gameOver ? "Game Over" : "Enter a number:" }
                        </h2>
                        <p className='text-center text-gray-700 mb-2'>{popupMessage}</p>

                        { !gameOver && (
                            <div className='flex justify-center gap-2 mb-4'>
                            {[1,2,3,4,5,6,7,8,9,0].map((value)=> (
                                <button
                                key={value}
                                onClick={()=>handleInputChange(value !== 0 ? value : 0)}
                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                >
                                {value !== 0 ? value : 'Clear'}
                                </button>
                            ))}
                           </div>
                        )}

                            <div className='flex justify-center'>
                                <button
                                 onClick={closePopup}
                                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                Close
                                </button>
                            </div>

                    </div>
                 </div>
            )}
      </div>
    </div>
  );
};

export default Home;
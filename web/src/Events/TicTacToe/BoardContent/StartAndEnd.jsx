/* eslint-disable react/prop-types */
import { GAME_STAGE } from "../../../constants/game";
import Board from "../Board";
import { useNavigate } from "react-router-dom";

export default function StartAndEnd({
  displayWinner,
  isXNext,
  boardState,
  onPlayerMove,
  disablePlayerMove,
  gameMetadata,
  userName,
}) {
  const playerSymbol = gameMetadata.symbolMap[userName];

  const navigate = useNavigate();

  const handleBackToLobby = () => {
    navigate("/");
  };

  return (
    <>
      <h3>Winner is {displayWinner}</h3>
      <h3>Next Player: {isXNext ? "X" : "O"}</h3>
      <h3>You are {playerSymbol}</h3>
      <Board
        boardState={boardState}
        onPlayerMove={onPlayerMove}
        disablePlayerMove={
          disablePlayerMove || gameMetadata.stage === GAME_STAGE.END
        }
      />
      <button className="leaveBtn" onClick={handleBackToLobby}>
        Back To Lobby
      </button>
    </>
  );
}

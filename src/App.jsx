import Player from "./components/Player.jsx";
import TimerChallenges from "./components/TimerChallenges.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenges title={"Easy"} targetTime={1} />
        <TimerChallenges title={"Not easy"} targetTime={5} />
        <TimerChallenges title={"Getting Though"} targetTime={15} />
        <TimerChallenges title={"Pros only"} targetTime={15} />
      </div>
    </>
  );
}

export default App;

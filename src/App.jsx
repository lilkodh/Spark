import { useState } from "react";
import { Challengecard } from "./Components/Challengecard";
import { Header } from "./Components/Header";
import { StreakTraker } from "./Components/Streaktracker";
import { Historylist } from "./Components/Historylist";
import { CompletionMessage } from "./Components/completionMessage";
import { Footer } from "./Components/footer";
import { Challenges } from "./Data/Challenges";

export function App() {
  const [done, setDone] = useState(false);
  function handleDone () {
    setDone(true);
    setStreak (previousstreak => previousstreak +1)

   setIndex(previousIndex =>
  previousIndex < Challenges.length - 1
    ? previousIndex + 1
    : 0
);
setHistory(previousHistory => [...previousHistory, Challenges[index]])
    
  }
  const [streak, setStreak] = useState(0);
  const[index, setIndex] = useState(0);
  const [history, setHistory] = useState([]);
  

  return (
    <>
    <div className="bg-[#1F2937] min-h-screen p-4">
     <Header/>
     <div className="flex gap-10">
     <Challengecard mrDone={handleDone} challenge={Challenges[index]} />
     <StreakTraker fstreak={streak} />
     
     </div >
      <Historylist history={history}/>
      <br />
      
      {done && <CompletionMessage />}
      <br />
      <Footer/>
     </div>
    </>
  );
}

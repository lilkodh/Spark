import { useState } from "react";
import { Challengecard } from "./Components/Challengecard";
import { Header } from "./Components/Header";
import { StreakTraker } from "./Components/Streaktracker";
import { Historylist } from "./Components/Historylist";
import { CompletionMessage } from "./Components/completionMessage";
import { Footer } from "./Components/footer";

export function App() {
  const [done, setDone] = useState(false);
  function handleDone () {
    setDone(true);
    setStreak (previousstreak => previousstreak +1)
  }
  const [streak, setStreak] = useState(0);

  return (
    <>
    <div className="bg-[#1F2937] min-h-screen p-4">
     <Header/>
     <div className="flex gap-10">
     <Challengecard mrDone={handleDone}/>
     <StreakTraker fstreak={streak}/>
     
     </div >
      <Historylist/>
      <br />
      
      {done && <CompletionMessage />}
      <br />
      <Footer/>
     </div>
    </>
  );
}

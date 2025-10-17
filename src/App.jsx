import { useState } from "react";
import LanguageSwitcher from "./components/LanguageSwitcher";
import InvitationCard from "./components/InvitationCard";
import TimerSection from "./components/TimerSection";
import MapSection from "./components/MapSection";

function App() {
  const [lang, setLang] = useState("english"); // default language

  return (
    <div className="App relative ">
      <LanguageSwitcher lang={lang} setLang={setLang} />
      
      <InvitationCard lang={lang} />
      <TimerSection lang={lang} />
      <MapSection lang={lang} />
    </div>
  );
}

export default App;

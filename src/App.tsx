import React from "react";
import { Profile } from "./components/profile/Profile";
import "../src/global.css";

const App: React.FC<{}> = () => {
  return (
    <div id="main">
      <Profile
        name="Alina Smith"
        description="Hi, I'm Alina. I’m a UX/UI web and mobile designer with over 6 years of exp. in helping brands make it big. "
        buttonLabel="Hire Me"
        imageUrl=""
      />
    </div>
  );
};

export default App;

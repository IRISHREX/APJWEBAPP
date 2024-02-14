import React from "react";
import Home from "./Components/Home";
import './App.css'

import { FeatureComingSoonProvider } from "../src/context/FeatureComingSoonContext.js";

function App() {
  return (
    <div>
<FeatureComingSoonProvider>
     <Home />
  
     </FeatureComingSoonProvider>
    </div>
  );
}

export default App;

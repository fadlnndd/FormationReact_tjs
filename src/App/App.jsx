import React from "react";
import Footer from "./components/uis/Footer/Footer";
import Header from "./components/uis/Header/Header";
import Navbar from "./components/uis/Navbar/Navbar";
import FlexHGrow3 from "./components/layouts/FlexHGrow3/FlexHGrow3";
import FlexWGrow1 from "./components/layouts/FlexWGrow1/FlexWGrow1";
import MemeSvgViewer from "./components/uis/MemeSvgViewer/MemeSvgViewer";
import MemeForm from "./components/functionnal/MemeForm/MemeForm";

const App = () => {
  return (
    <div className="App">
      <FlexHGrow3 style={{height: 'calc(100vh - 30px)'}}>
        <Header />
        <Navbar />
        <FlexWGrow1>
          <MemeSvgViewer />
          <MemeForm />
        </FlexWGrow1>
        <Footer />
      </FlexHGrow3>
    </div>
  );
};
export default App;

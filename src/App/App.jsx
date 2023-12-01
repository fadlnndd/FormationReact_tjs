import React, { useEffect, useState } from "react";
import Footer from "./components/uis/Footer/Footer";
import Header from "./components/uis/Header/Header";
import Navbar from "./components/uis/Navbar/Navbar";
import FlexHGrow3 from "./components/layouts/FlexHGrow3/FlexHGrow3";
import FlexWGrow1 from "./components/layouts/FlexWGrow1/FlexWGrow1";
// import MemeSvgViewer from "./components/uis/MemeSvgViewer/MemeSvgViewer";
import MemeSvgViewer from "./components/uis/MemeSvgViewer/MemeSvgViewer.stored";
import { MemeFormHookConnected } from "./components/functionnal/MemeForm/MemeForm";
import {emptyMeme} from 'orsys-tjs-meme'
import { RESSOURCES_NAME, REST_ADDR } from "./config/config";
import { Routes, Route } from 'react-router-dom'
import Editor from "./pages/Editor";

// import { store } from "./store/store";

const App = () => {
  const [current, setCurrent] = useState(emptyMeme);
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(`${REST_ADDR}${RESSOURCES_NAME.images}`).then(resp => {return resp.json()}).then(arr => setImages(arr));
  }, [])
  return (
    <div className="App" data-testid="App">
      <FlexHGrow3 style={{height: 'calc(100vh - 30px)'}}>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<div>Hello Meme Generator ...</div>}></Route>
          <Route path="/new" element={<Editor />}></Route>
          <Route path="/editor/:id" element={<Editor />}></Route>
        </Routes>
        <Footer />
      </FlexHGrow3>
    </div>
  );
};
export default App;

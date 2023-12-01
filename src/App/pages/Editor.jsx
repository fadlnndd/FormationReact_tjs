import React, { useEffect } from "react";
import { MemeFormHookConnected } from "../components/functionnal/MemeForm/MemeForm";
import FlexWGrow1 from "../components/layouts/FlexWGrow1/FlexWGrow1";
import MemeSvgViewer from "../components/uis/MemeSvgViewer/MemeSvgViewer.stored";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clear, update } from "../store/current";
import { store } from "../store/store";

export default function Editor() {
  const params = useParams();
  console.log(params);
  const d = useDispatch();
  const r = useSelector(s => s.ressources);
  useEffect(() => {
    if (params.id !== undefined) {
        d(update(store.getState().ressources.memes.find(m => m.id === Number(params.id))))
    } 
    else {
        d(clear())
    }
    return () => {
      //effect
    };
  }, [params,d,r])
  return (
    <FlexWGrow1>
      <MemeSvgViewer />
      <MemeFormHookConnected />
    </FlexWGrow1>
  );
}

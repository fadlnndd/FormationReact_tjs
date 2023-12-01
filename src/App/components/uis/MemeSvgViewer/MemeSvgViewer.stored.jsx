import React from "react";
import MemeSvgViewerHookConnected from "./MemeSvgViewer";
import { useSelector } from "react-redux";

export default function MemeSvgViewer(props) {
    const current = useSelector((s) => s.current);
    const image = useSelector((s) => s.ressources.images.find((img) => img.id === s.current.imageId));
    return <MemeSvgViewerHookConnected {...props} image={image} meme={current} />;
}

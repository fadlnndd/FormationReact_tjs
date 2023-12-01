import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeSvgViewer.module.css";

const MemeSvgViewer = (props) => {
  return (
    <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">
      <svg viewBox={`0 0 ${props.image ? props.image.w : 100} ${props.image ? props.image.h : 100}`}>
        {(undefined !== props.image) &&
        (<image href={props.image.url} x="0" y="0"/>)}
        <text
          style={{
            fontSize: props.meme.fontSize,
            fontWeight: props.meme.fontWeight,
            textDecoration: props.meme.underline ? "underline" : "none",
            fontStyle: props.meme.italic ? "italic" : "normal",
          }}
          fill={props.meme.color}
          x={props.meme.x}
          y={props.meme.y}
        >
          {props.meme.text}
        </text>
      </svg>
    </div>
  );
};

MemeSvgViewer.propTypes = {
  meme: PropTypes.object.isRequired,
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string,
    w: PropTypes.number,
    h: PropTypes.number,
    name: PropTypes.string,
  }).isRequired
};
MemeSvgViewer.defaultProps = {};

export default MemeSvgViewer;

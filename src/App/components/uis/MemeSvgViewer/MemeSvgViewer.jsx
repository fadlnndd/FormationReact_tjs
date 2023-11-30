import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeSvgViewer.module.css";

const MemeSvgViewer = (props) => {
  return (
    <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">
      <svg viewBox="0 0 100 100">
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
  meme: PropTypes.object.isRequired
};
MemeSvgViewer.defaultProps = {};

export default MemeSvgViewer;

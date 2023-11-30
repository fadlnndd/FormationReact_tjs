import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeForm.module.css";
import Button from "../../uis/Button/Button";

const MemeForm = (props) => {
  const [state, setState] = useState(props.meme);
  useEffect(() => {
    setState(props.meme);
  }, [props]);
  const manageStringChangeEvent = (evt) => {
    let newState = { ...state };
    newState[evt.target.name] = evt.target.value;
    setState(newState);
  };
  const manageNumberChangeEvent = (evt) => {
    let newState = { ...state };
    newState[evt.target.name] = Number(evt.target.value);
    setState(newState);
  };
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          props.onMemeChange(state);
        }}
        onReset={(evt) => {
          evt.preventDefault();
          props.onMemeChange(props.meme);
        }}
      >
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input
          name="titre"
          id="titre"
          value={state.titre}
          onChange={manageStringChangeEvent}
        />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="image" id="image">
          <option value="1">futurama1.jpg</option>
          <option value="2">futurama2.png</option>
          <option value="3">futurama3.png</option>
          <option value="4">gwenadu.jpg</option>
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input
          name="text"
          id="text"
          type="text"
          value={state.text}
          onChange={manageStringChangeEvent}
        />
        <br />
        <label htmlFor="x">
          <h2 className={styles.inline}>x :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="x"
          id="x"
          type="number"
          value={state.x}
          onChange={manageNumberChangeEvent}
        />
        <label htmlFor="y">
          <h2 className={styles.inline}>y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="y"
          id="y"
          type="number"
          value={state.y}
          onChange={manageNumberChangeEvent}
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 className={styles.inline}>color :</h2>
        </label>
        <input
          name="color"
          id="color"
          type="color"
          value={state.color}
          onChange={manageStringChangeEvent}
        />
        <br />
        <label htmlFor="fontSize">
          <h2 className={styles.inline}>font-size :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
          value={state.fontSize}
          onChange={manageNumberChangeEvent}
        />
        px
        <br />
        <label htmlFor="fontWeight">
          <h2 className={styles.inline}>font-weight :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900"
          value={state.fontWeight}
          onChange={manageStringChangeEvent}
        />
        <br />
        <input
          name="underline"
          id="underline"
          type="checkbox"
          checked={state.underline}
          onChange={(evt) => {
            setState({ ...state, underline: evt.target.checked });
          }}
        />
        &nbsp;
        <label htmlFor="underline">
          <h2 className={styles.inline}>underline</h2>
        </label>
        &nbsp;<h2 className={styles.inline}>/</h2>&nbsp;
        <label htmlFor="italic">
          <h2 className={styles.inline}>italic</h2>
        </label>
        &nbsp;
        <input
          name="italic"
          id="italic"
          type="checkbox"
          checked={state.italic}
          onChange={(evt) => {
            setState({ ...state, italic: evt.target.checked });
          }}
        />
        <hr />
        <br />
        <label htmlFor="frameSizeX">
          <h2 className={styles.inline}>frame size X :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeX"
          id="frameSizeX"
          type="number"
          min="0"
          value={state.frameSizeX}
          onChange={manageNumberChangeEvent}
        />
        px{" "}
        <label htmlFor="frameSizeY">
          <h2 className={styles.inline}>frame size y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeY"
          id="frameSizeY"
          type="number"
          min="0"
          value={state.frameSizeY}
          onChange={manageNumberChangeEvent}
        />
        px
        <br />
        <div className={styles.flexCols2}>
          <Button type="reset" bgColor="tomato">
            Cancel
          </Button>
          <Button type="submit" bgColor="skyblue">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

MemeForm.propTypes = {
  meme: PropTypes.object.isRequired,
  onMemeChange: PropTypes.func.isRequired,
};
MemeForm.defaultProps = {};

export default MemeForm;
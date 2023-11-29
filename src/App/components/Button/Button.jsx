import React, { useEffect, useState } from "react";
import styles from './Button.module.css'
import PropTypes from 'prop-types'

function Button(props) {
    console.log(props);
    const [isClicked, setIsClicked] = useState({clickedState:false,info2:'coucou'})
    useEffect(() => {
      // la valeur a changer
      if (isClicked.clickState) {
        setTimeout(() => {
          setIsClicked({ ...isClicked, clickedState: false});
        }, 250);        
      }
    }, [isClicked])
    return (
      <button
        onClick={(evt) => {
        //   console.log(evt);
          setIsClicked({ ...isClicked, clickedState: true});
          if (props.onButtonClicked !== undefined) {
            props.onButtonClicked();
          }
        }}
        type={props.type}
        className={styles.Button + (isClicked.clickedState ? ' ' + styles.clicked : '' )}
        style={{ backgroundColor: props.bgColor }}
      >
        {props.text}
      </button>
    );
}
Button.propTypes={
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['submit','reset','button']),
    size: PropTypes.shape({
      
        margin: PropTypes.shape({
          bottom: PropTypes.string,
          right: PropTypes.string
        }),
        padding: PropTypes.shape({
          h: PropTypes.string,
          w: PropTypes.string
        })
    }),
    bgColor: PropTypes.string
}

Button.defaultProps={
    type:'button'
}
export default Button;
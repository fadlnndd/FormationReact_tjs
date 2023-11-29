import React from "react";
import styles from './Button.module.css'
import PropTypes from 'prop-types'

function Button(props) {
    console.log(props);
    return <button type={props.type} className={styles.Button}>{props.text}</button>
}
Button.propTypes={
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['submit','rest','button']),
    size: PropTypes.shape({
      
        margin: PropTypes.shape({
          bottom: PropTypes.string,
          right: PropTypes.string
        }),
        padding: PropTypes.shape({
          h: PropTypes.string,
          w: PropTypes.string
        })
    })
}

export default Button;
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './MemeForm.module.css'

const MemeFormInitialState = {}
const MemeForm = props => {
  const [state, setState] = useState(MemeFormInitialState)
  useEffect(() => {
    // mount
    return () => {
      //unmount
    };
  }, [state])
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">component memeForm</div>
  )
}

MemeForm.propTypes = {}
MemeForm.defaultProps = {}

export default MemeForm
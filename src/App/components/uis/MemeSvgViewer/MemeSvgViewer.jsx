import React from 'react'
import PropTypes from 'prop-types'
import styles from './MemeSvgViewer.module.css'

const MemeSvgViewer = props => {
  return (
    <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">component memeSvgViewer</div>
  )
}

MemeSvgViewer.propTypes = {}
MemeSvgViewer.defaultProps = {}

export default MemeSvgViewer
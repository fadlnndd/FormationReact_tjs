import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from 'TemplateName.module.css'

const TemplateNameInitialState = {}
const TemplateName = props => {
  const [state, setState] = useState(TemplateNameInitialState)
  useEffect(() => {
    // mount
    return () => {
      //unmount
    };
  }, [state])
  return (
    <div data-testid="TemplateName">component templateName</div>
  )
}

TemplateName.propTypes = {}
TemplateName.defaultProps = {}

export default TemplateName
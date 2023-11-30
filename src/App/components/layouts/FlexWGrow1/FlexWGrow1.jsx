import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexWGrow1.module.css';

const FlexWGrow1 = (props) => (
  <div className={styles.FlexWGrow1} data-testid="FlexWGrow1" style={{ ...props.style}}>
    {props.children}
  </div>
);

FlexWGrow1.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.object
};

FlexWGrow1.defaultProps = {};

export default FlexWGrow1;

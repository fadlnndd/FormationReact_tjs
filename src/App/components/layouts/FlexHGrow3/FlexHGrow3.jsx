import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexHGrow3.module.css';

const FlexHGrow3 = (props) => (
  <div className={styles.FlexHGrow3} data-testid="FlexHGrow3" style={{ ...props.style}}>
    {props.children}
  </div>
);

FlexHGrow3.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.object
};

FlexHGrow3.defaultProps = {};

export default FlexHGrow3;

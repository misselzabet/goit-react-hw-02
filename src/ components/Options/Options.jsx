import React from 'react';
import PropTypes from 'prop-types';
import styles from './Options.module.css';

const Options = ({ options, onLeaveFeedback, onReset, totalFeedback }) => {
  return (
    <div className={styles.options}>
     
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          className={styles.button}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}

      {totalFeedback > 0 && (
        <button type="button" onClick={onReset} className={`${styles.button} ${styles.reset}`}>
          Reset
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;

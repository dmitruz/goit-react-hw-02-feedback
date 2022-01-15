import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
const OptionButton = ({ name, onClickAction}) => {
    return (
        <button className={styles.feedbackBtn}type = "button"
        name={name}
        onClick={onClickAction}
        style={{ marginRight: 10 }}

        >
            {name}
        </button>
    );
};

OptionButton.propTypes = {
    name: PropTypes.string.isRequired,
    onClickAction: PropTypes.func.isRequired,
};

export default OptionButton;
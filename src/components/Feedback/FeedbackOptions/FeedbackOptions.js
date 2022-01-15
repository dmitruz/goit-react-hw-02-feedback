import React from 'react';
import PropTypes from 'prop-types';
import OptionButton from './OptionButton';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(el => (
                <OptionButton  key={el} name={el} onClickAction={onLeaveFeedback} />
            ))}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
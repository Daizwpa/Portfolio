import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ButtonGrdient({ content, icon }) {
    return (
        <button type="button" className="rounded-pill btn-rounded">
            {content}
            <span>
                <FontAwesomeIcon className="icon" icon={icon} />
            </span>
        </button>

    )
}

export default ButtonGrdient

// Prop Valdation
ButtonGrdient.propTypes = {
    content: PropTypes.string.isRequired,
    icon: PropTypes.string
}

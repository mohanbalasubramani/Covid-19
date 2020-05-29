import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ActivityIndicator = props => {

    let classes = [ 'fa', 'fa-spin', 'fa-spinner' ];

    if( props.small ) classes.push( 'fa-lg' );

    if( props.medium ) classes.push( 'fa-2x' );

    if( props.large ) classes.push( 'fa-3x' );

    return (
        <div className="loading">
            <i className={ classes.join( ' ' ) } />
        </div>
    )
};

ActivityIndicator.defaultProps = {
    large: false,
    medium: false,
    small: false
}

ActivityIndicator.propTypes = {
    large: PropTypes.bool,
    medium: PropTypes.bool,
    small: PropTypes.bool
}

export default ActivityIndicator;
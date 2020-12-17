import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onPlus: PropTypes.func,
    onSubTract: PropTypes.func,
    onRandomizeColor: PropTypes.func
};

function createWarning (funcName){
    return () => console.warn(funcName + " is not defined");
}

const defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubTract: createWarning('onSubTract'),
    onRandomizeColor: createWarning('onRandomizeColor')
};

class Control extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubTract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        );
    }
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;
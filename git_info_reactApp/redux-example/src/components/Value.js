import PropTypes from 'prop-types';

const Value = ({number}) => {
    return (
        <div>
            <div>
                <h1>{this.props.number}</h1>
            </div>
        </div>
    );
}

const propTypes = {
    number: PropTypes.number
};

const defaultProps = {
    number: -1
};

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

export default Value;
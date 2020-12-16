import React from 'react';
import PropTypes from 'prop-types';


class SubmitInput extends React.Component {
  render() {

    return (
      <input type={this.props.type} value={this.props.value} id={this.props.id} />
    );
  }

}

export default SubmitInput;

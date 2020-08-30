import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../store/actions/postActions';

import CareRecipientSelector from './CareRecepientSelector/CareRecepientSelector';

class DetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipients: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      recipients: this.state.recipients
    };
    this.props.createPost(post);
  }

  render() {
    return (
      <div className="App-content">
        <form onSubmit={this.onSubmit}>
            <label>Care Recipient: </label>
            <CareRecipientSelector onChange={this.onChange}/>
          <button type="submit">Get Details</button>
        </form>
      </div>
    );
  }
}

DetailsForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(DetailsForm);

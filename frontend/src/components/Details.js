import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
    this.props.posts.unshift(nextProps.newPost);
    //this.props.posts.push(nextProps.newPost);
    }
  }
  render() {
    const care = this.props.posts;
       return (  
      <div className="App-content">
      <table>
        <thead><tr><th width="300">Event Id</th><th width="400">Event Type</th><th width="300">Care Giver</th><th width="300">Visit Id</th><th width="300">Time</th></tr></thead>
        <tbody>{care.length > 0 && care[0].map((s, i) => (
        <tr key={i}><td>{s.id}</td><td>{s.event_type}</td><td>{s.caregiver_id}</td><td>{s.visit_id}</td><td>{s.timestamp}</td></tr>
        ))}</tbody>
        </table></div>
  );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps)(Details);

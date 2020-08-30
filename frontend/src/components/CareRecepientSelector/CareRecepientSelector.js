import React, { Component } from 'react';

class CareRecepientSelector extends Component{
    state = {
        events: [],
        value:'Select'
    }

      componentDidMount() {
        fetch('/events')
          .then(res => res.json())
          .then(data => this.setState({
            events: data 
          }));
      }

    recepientChangedHandler = (e) => {
      e.preventDefault();
        this.setState({value: e.target.value});
    }

    render(){
        const { events } = this.state;
        return (
                  <select id="recipients" name="recipients" value={this.state.value} onChange={this.recepientChangedHandler}>
                    if(!events.care_recipient_id) {
                      <option value="Select">Select Care Recepient</option>
                    }
                    {events.map((event, i) =>
                      <option key={i} value={event.care_recipient_id.toString()}>{event.care_recipient_id}</option>
                    )}
                  </select>
        )
    }

}

export default CareRecepientSelector;
'use strict';
var dbConn = require('./../../config/db.config');
//Event object create
class Event {
  constructor(event) {
    this.id = event.id;
    this.event_type = event.event_type;
    this.visit_id = event.visit_id;
    this.timestamp = event.timestamp;
    this.caregiver_id = event.caregiver_id;
    this.care_recipient_id = event.care_recipient_id;
  }
  static findById(id, result) {
    dbConn.query("Select id, event_type, visit_id, timestamp, caregiver_id from events where care_recipient_id = ?", id, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      }
      else {
        result(null, res);
      }
    });
  }
  static findAll(result) {
    dbConn.query("SELECT  DISTINCT care_recipient_id FROM events LIMIT 10", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      }
      else {
        console.log('events : ', res);
        result(null, res);
      }
    });
  }
}
module.exports= Event;
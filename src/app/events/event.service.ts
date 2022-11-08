import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Event } from "./event.model";
import { doc, collection, query, where, getDocs } from 'firebase/firestore';
import { map } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';

@Injectable()
export class EventService {

  constructor(private db: AngularFirestore) {}

  //===================================//
  //  BASIC EVENT CRUD OPERATIONS
  //===================================//

  //Add a new event to the database
  //passing in a event object from the form
  addEvent(event: Event) {
    //Convert event model to JSON object
    const eventObject = {...event};
    return this.db.collection('Events').add(eventObject);
  }

  //Get events (retrieve from db) WITH ID
  //returns an observable object with a list of events from the db
  getEvents() {
    return this.db.collection('Events').snapshotChanges();
  }

  //take event object and update the firestore document
  updateEvent(event: Event) {
    //convert to JSON
    const eventObject = {...event};
    this.db.doc('Events/' + event.id).update(eventObject);
  }

  //delete event from db (takes an id)
  deleteEvent(eventId: string) {
    this.db.doc('Events/' + eventId).delete();
  }

  //==============================//
  // EVENT QUERYING OPERATIONS
  //==============================//

  //getEventInflatables
  //This method should return all EventInflatable Documents for an event that is passed in
  //***note must pass in an event id for query***
  fetchEventInflatables(eventId: string) {
    return this.db.collection('EventInflatables', ref => ref.where('strEventID', '==', eventId)).snapshotChanges();
  }

  //fetchInflatables
  //returns an observable object with a list of inflatables from the db
  fetchInflatables() {
    return this.db.collection('Inflatables').snapshotChanges();
  }

}

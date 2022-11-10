import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventService } from './event.service';
import { Event } from "./event.model";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  //Variables
  event: Event = <Event>{}; //Store a single event object
  events: Event[] = [];     //Store all current events

  //Store the event object passed from the update click
  eventToUpdate: Event = <Event>{};

  //Inflatables for the current event in question
  eventInflatables: any[] = [];

  //Store All Inflatables from Inflatables table
  inflatables: any[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {

    this.getEvents();
    this.getInflatables();

  }

  //Local getEvents method ***DIFFERENT FROM ONE IN THE SERVICE.TS***
  getEvents() {

    //get list from EventService
    this.eventService.getEvents().subscribe(data => {

      //this.events stores an array of events (with ID)
      this.events = data.map(e => {
        const data = e.payload.doc.data() as Event
        return {
          id: e.payload.doc.id,
          dteEventDate: data.dteEventDate,
          strEventName: data.strEventName
        };
      });
    });
  }

  //This method takes the update click and passes the event object to it
  onUpdateClick(event: Event) {
    //Pass object to local variable.
    this.eventToUpdate = event;
  }

  //This method takes a event object and calls
  //updateEvent() from EventService
  updateEvent(event: Event) {
    this.eventService.updateEvent(event);

    //clear/reset object
    this.eventToUpdate = <Event>{};
  }

  //this method takes a Event ID and
  //calls deleteEvent from EventService
  deleteEvent(eventId: string) {
    this.eventService.deleteEvent(eventId);
  }

  //Get Event field values and store in event property
  onCreateEvent(form: NgForm) {

    //If form is invalid, return to the form
    if(form.invalid){
      return;
    }

    //Push new event entry to array
    this.event.dteEventDate = form.value.eventDate;
    this.event.strEventName = form.value.eventName;

    this.addEvent(this.event);

    //Clear the form controls for next entry
    form.resetForm();

  }

  //This method takes a event object and
  //calls addEvent() from EventService
  addEvent(event: Event) {
    return this.eventService.addEvent(event);
  }



  //--------------------------------------
  // UPDATE EVENT FORM SUBMISSION
  //--------------------------------------
  onUpdateEvent(form: NgForm) {

    //If form is invalid, return to the form
    if(form.invalid){
      return;
    }

    //Push updates to stored event object
    this.eventToUpdate.dteEventDate = form.value.eventDate;
    this.eventToUpdate.strEventName = form.value.eventName;

    //Call update from service
    this.updateEvent(this.eventToUpdate);

  }

  //getEventInflatables
  getEventInflatables(eventId: string) {

    //get list from EventService
    this.eventService.fetchEventInflatables(eventId).subscribe(data => {

      //this.events stores an array of event inflatables
      this.eventInflatables = data.map(e => {
        const data = e.payload.doc.data() as any
        return {
          EventInflatableID: e.payload.doc.id,    //DocumentID
          strEventID: data.strEventID,            //Document - EventID
          strInflatableID: data.strInflatableID   //Document - InflatableID (Foreign Key)
        };
      });
    });

  }

  //this gets all inflatables from the
  //inflatables table
  getInflatables(){
    //get list from EventService
    this.eventService.fetchInflatables().subscribe(data => {

      //this.events stores an array of event inflatables
      this.inflatables = data.map(e => {
        const data = e.payload.doc.data() as any
        return {
          strInflatableID: e.payload.doc.id,           //DocumentID - InflatableID (Primary Key)
          strInflatableName: data.strInflatableName,     //Document - strInflatableName
        };
      });
    });
  }

}

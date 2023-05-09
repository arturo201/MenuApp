// This class represents an invitee.
class Invitee {
    // The name of the invitee
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    // Returns a string describing the invitee.
    describe() {
        return `${this.name} is my ${type}.`
    }
}

// This class represents an event
class Event {
    // The name of the event
    constructor(name) {
        this.name = name;
        this.invitees = [];
    }

    // Adds an invitee to the event
    addInvitee(invitee) {
        if (invitee instanceof Invitee) {
            this.invitees.push(invitee);
        } else {
            throw new Error(`You can only add an instance of Event. Arguement is not an event: ${invitees}`);
        }
    }

    describe() {
        return `${this.name} has ${this.invitees.length}.`;
    }

}


class Menu {
    constructor() {
        // array of events
        this.events = [];
        // array of invitees
        this.invitees = [];
        // the selected event
        this.selectedEvent = null;
    }

    // starta the menu
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createEvent();
                    break;
                case '2':
                    this.viewEvent();
                    break;
                case '3':
                    this.deleteEvent();
                    break;
                case '4':
                    this.displayEvents();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }
    // show main menu options
    showMainMenuOptions(){
        return prompt(`
            0) exit
            1) create new event
            2) view event
            3) delete event
            4) display all events
        
        `);
    }
    // show event menu options
    showEventMenuOptions(eventInfo) {
        return prompt(`
        0) Back
        1) Add invitee
        2) Delete invitee
        -----------------------
        ${eventInfo}
        
        `);
    }
    // Displays all events
    displayEvents() {
        // string will display events 
        let eventString = '';
        for(let i = 0; i < this.events.length; i++){
            eventString += i + ') ' + this.events[i].name + '\n';
        }
        alert(eventString);
    }
    // creates a new event
    createEvent(){
        let name = prompt('Enter name of Event')
        this.events.push(new Event(name));
    }
    // views the selected event
    viewEvent(){
        // Get the index of the event from the user
        let index = prompt('Enter the index of the event you want to view:');
        // Check if the index is valid
        if(index > -1 && index < this.events.length) {
            // Set the selected event to the event at the specified index
            this.selectedEvent = this.events[index];
            // Create a string that describes the event
            let description = 'Event Name: ' + this.selectedEvent.name + '\n';
            // For each invitee in the event, append a line to the description string
            for(let i = 0; i < this.selectedEvent.invitees.length; i++) {
                description += i + ') ' + this.selectedEvent.invitees[i].name + ' - ' + this.selectedEvent.invitees[i].type + '\n';
            }
            // Display the menu options for the event
            let selection = this.showEventMenuOptions(description);
            // switch on the users selection
            switch(selection){
                // if the user selected to create a new invitee
                case '1':
                    // create a new invitee
                    this.createInvitee();
                    break;
                // if the user selected to delete an invitee    
                case '2':
                    // delete invitee
                    this.deleteInvitee();
            }
        }
    }

    deleteEvent() {
        let index = prompt('Enter the index of the event you wish to delete: ') 
        if(index > -1 && index < this.events.length) {
            this.events.splice(index, 1);
        }
        
    }


    createInvitee() {
        let name = prompt('Enter name for your invitee: ');
        let type = prompt('Enter relationship to your invitee: ');
        this.selectedEvent.invitees.push(new Invitee(name, type));
    }

    deleteInvitee() {
        let index = prompt('Enter the index of the invitee you would like to remove: ');
        if(index > -1 && index < this.selectedEvent.invitees.length) {
            this.selectedEvent.invitees.splice(index, 1);
        }
    }   
}

let menu = new Menu();
menu.start();










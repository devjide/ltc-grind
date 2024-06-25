class EventEmitter {
  constructor() {
    this.events = {
      // event2: [' sencond listener callback]

    };
  }

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    const event = { callback };


    this.events[eventName].push(event);

    return {
      release: () => {
        this.events[eventName] = this.events[eventName].filter(
          (e) => e !== event
        );
        if (this.events[eventName].length === 0) {
          delete this.events[eventName];
        }
      }
    };
  }

  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((event) => {
        event.callback(...args);
      });
    }
  }
}

const emitter = new EventEmitter();

// Listener 1
const t = emitter.subscribe("event1", (data) => {
  console.log("First listener:", data);
});

// Listener 2
const  p = emitter.subscribe("event2", (data) => {
  console.log("Secone Listenent listener:", data);
});

// Listener 1
const q = emitter.subscribe("event1", (data) => {
  console.log("First listener again:", data);
});

// Emit the event with data
emitter.emit("event1", "Hello from the emitter!");

t.release()
q.release()

emitter.emit("event1", "Hello from the emitter!");
